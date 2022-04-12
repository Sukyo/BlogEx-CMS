import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/** 拦截器实现方法 */
type InterceptorFulfilled<T> = (value: T) => T | Promise<T>;

/** 拦截器错误兜底 */
type InterceptorRejected = (error: unknown) => unknown;

/** 拦截器管理器 */
type InterceptorManager<T> = [InterceptorFulfilled<T>, InterceptorRejected];

/** 请求拦截 */
type InterceptorRequest = Array<InterceptorManager<AxiosRequestConfig>
  | InterceptorFulfilled<AxiosRequestConfig>>;

/** 响应拦截 */
type InterceptorResponse = Array<InterceptorManager<AxiosResponse> | InterceptorFulfilled<AxiosResponse>>;

/** 请求选项 */
interface RequestOptions<T> {
  /** 手动触发请求 */
  manual?: boolean
  /** 是否请求错误时重试 */
  shouldRetryOnError?: boolean
  /** 错误重试间隔 */
  errorRetryInterval?: number
  /** 最大错误重试次数 */
  errorRetryCount?: number
  /** 是否请求超时重试 */
  shouleRetryOnTimeout?: boolean
  /** 超时重试间隔 */
  timeoutRetryInterval?: number
  /** 最大超时重试次数 */
  timeoutRetryCount?: number
  /** 拦截器 */
  interceptors?: {
    request?: InterceptorRequest
    response?: InterceptorResponse
  }
  /** 请求超时触发回调 */
  onTimeout?: () => void
  /** 请求成功回调 */
  onSuccess?: (response: AxiosResponse<T>, config: AxiosRequestConfig) => void
  /** 请求错误回调 */
  onError?: (error: AxiosError<T>) => void
  /** 请求错误重试回调 */
  onErrorRetry?: (error: AxiosError<T>) => void
}

/** 请求返回码 */
enum ResponseResultCode {
  OK = 200,
  CREATED = 201,
  UNAUTHORIZED = 401,
  FORBIDDE = 403,
  NOTFOUND = 404
}

/** 请求返回结果 */
type Response<T, R = ResponseResultCode> = {
  code: R,
  /** 返回信息 */
  message: string
} & T;

export {
  InterceptorFulfilled,
  InterceptorRejected,
  InterceptorManager,
  InterceptorRequest,
  InterceptorResponse,
  RequestOptions,
  ResponseResultCode,
  Response
}
