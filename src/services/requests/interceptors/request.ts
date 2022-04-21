import { RequestError } from './../error';
import { AxiosRequestConfig, AxiosError } from 'axios';
import { InterceptorRequest } from '../types';
/**
 * @description 请求拦截器
 */
const REQUEST_INTECEPTORS: {
  request: InterceptorRequest
} = {
  /**
   * @description 默认的请求拦截器
   */
  request: [
    [
      (request: AxiosRequestConfig): AxiosRequestConfig => {
        return request
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error)
      }
    ]
  ],
};
export { REQUEST_INTECEPTORS }