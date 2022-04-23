import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource, AxiosStatic } from 'axios';
import { RequestOptions, InterceptorRequest } from './types';
import { DEFAULT_REQUEST_OPTIONS, DEFAULT_REQUEST_CONFIG } from './constants';
import { RequestError } from './error';
import { ElLoading, ElMessage } from 'element-plus';
/**
 * 设置拦截器
 * @param instance
 * @param interceptors
 */
export function setInterceptors<T>(
  instance: AxiosInstance | AxiosStatic,
  interceptors: RequestOptions<T>['interceptors'],
): void {
  if (interceptors && Array.isArray(interceptors.request) && interceptors.request.length > 0) {
    const beforeRequestHandlers = interceptors.request.reverse(); // 拦截器是unshift到handleChain里的, axios执行时是倒序执行
    beforeRequestHandlers.forEach((interceptor) => {
      // if判断是数组让ts不报错
      if (Array.isArray(interceptor) && interceptor.length > 0) {
        instance.interceptors.request.use(...interceptor);
      }
    });
  }

  if (interceptors && Array.isArray(interceptors.response) && interceptors.response.length > 0) {
    interceptors.response.forEach((interceptor) => {
      if (Array.isArray(interceptor) && interceptor.length > 0) {
        instance.interceptors.response.use(...interceptor);
      }
    });
  }
}

/**
 * 请求类
 */
export class Request<T, R = T> {
  /** 返回对象 */
  public response: AxiosResponse<R> | null = null;
  /** 返回数据 */
  public data: R | null = null;
  /** 错误对象 */
  public error: AxiosError<R> | null = null;
  /** loading 标志 */
  public loading = false;
  /** 请求实例 */
  private instance: AxiosInstance;
  /** 选项 */
  private options: RequestOptions<T> = DEFAULT_REQUEST_OPTIONS;
  /** 请求配置 */
  private config: AxiosRequestConfig;
  /** 取消标志 */
  private cancelSource: CancelTokenSource;

  public constructor(config: AxiosRequestConfig, options: RequestOptions<T>) {
    this.config = config;
    this.options = options;
    this.instance = axios.create(DEFAULT_REQUEST_CONFIG);
    this.cancelSource = axios.CancelToken.source();

    setInterceptors<T>(this.instance, this.options?.interceptors);
  }

  /**
   * 设置请求配置
   * @param config
   */
  public setConfig(config: AxiosRequestConfig): void {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  /**
   * 获取请求配置
   */
  public getConfig(): AxiosRequestConfig {
    return this.config;
  }

  /**
   * 执行请求
   * @param params 请求参数
   */
  public async run(params = {}): Promise<void> {
    return this.fetch(params);
  }

  /**
   * 使用上一次的 params，重新执行请求
   */
  public refresh(): Promise<void> {
    return this.run();
  }

  /**
   * 取消当前请求
   */
  public cancel(): void {
    this.cancelSource.cancel();
  }

  /**
   * 请求方法
   * @param params 参数
   */
  private async fetch(params = {}): Promise<void> {
    this.cancelSource = axios.CancelToken.source();
    this.setConfig({
      params: {
        ...this.config.params,
        ...params,
      },
      cancelToken: this.cancelSource.token,
    });
    this.loading = true;
    try {
      this.response = await this.instance.request<T, AxiosResponse<R>>(this.config);
      this.data = this.response.data;
    } catch (error: any) {
      ElMessage({
        type: 'error',
        message: error.msg || '当前网络连接错误，请重试',
        duration: 5000
      })
      this.error = error;
      throw new RequestError(error.code || 99999, error.msg || '当前网络连接错误，请重试');
    }
    this.cancel();
    this.loading = false;
  }
}
