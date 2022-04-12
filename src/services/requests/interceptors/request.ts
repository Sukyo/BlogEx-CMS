import { AxiosRequestConfig } from 'axios';
import { InterceptorRequest } from '../types';
const REQUEST_INTECEPTORS: {
  request: InterceptorRequest
} = {
  /**
   * @description 默认的请求拦截器
   */
  request: [
    (request: AxiosRequestConfig): AxiosRequestConfig => {
      return request
    },
  ],
};
export { REQUEST_INTECEPTORS }