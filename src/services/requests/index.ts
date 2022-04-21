import { AxiosRequestConfig } from 'axios';
import { DEFAULT_REQUEST_OPTIONS } from './constants';
import { RequestOptions } from './types';
import { Request } from './request';

/**
 * 请求方法
 * @param config axios 配置
 * @param options axios 选项
 */
export async function request<T, R = T>(
  config: AxiosRequestConfig,
  options: RequestOptions<T> = DEFAULT_REQUEST_OPTIONS,
): Promise<Request<T, R>> {
  const service = new Request<T, R>(config, {
    ...DEFAULT_REQUEST_OPTIONS,
    ...options,
  });
  // 如果是手动调用 则直接返回
  if (options.manual) {
    return service;
  }
  await service.run(); // 执行请求
  return service;
}
