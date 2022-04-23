import { AxiosRequestConfig } from 'axios';
import { RESPONSE_INTECEPTORS } from './interceptors';
import { REQUEST_INTECEPTORS } from './interceptors/request';
/**
 * @description axios默认请求选项
 */
const DEFAULT_REQUEST_OPTIONS = {
  /**
   * 手动触发请求
   */
  manual: false,
  /**
   * 是否请求错误时重试
   */
  shouldRetryOnError: true,
  /**
   * 错误重试间隔
   */
  errorRetryInterval: 5000,
  /**
   * 最大错误重试次数
   */
  errorRetryCount: 8,
  /**
   * 拦截器
   */
  interceptors: {
    request: REQUEST_INTECEPTORS.request,
    response: RESPONSE_INTECEPTORS.response,
  },
};
// 根据当前环境配置baseurl
/**
 * @description 默认请求配置
 */
const DEFAULT_REQUEST_CONFIG: AxiosRequestConfig = {
  timeout: 20000, // 20秒请求超时
  method: 'GET', // 默认GET请求
  withCredentials: true, // 默认携带cookie
};

export {
  DEFAULT_REQUEST_OPTIONS,
  DEFAULT_REQUEST_CONFIG
}