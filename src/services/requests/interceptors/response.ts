import { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import { InterceptorResponse, ResponseResultCode } from '../types';
// import router from '@/router/index';
import Cookies from 'js-cookie';

/**
 * @description 响应拦截器
 */
const RESPONSE_INTECEPTORS: {
  response: InterceptorResponse
} = {
  response: [
    (response: AxiosResponse): AxiosResponse => {
      const { code } = response.data;
      if (code === ResponseResultCode.UNAUTHORIZED) {
        Cookies.remove('token');
        localStorage.removeItem('token');
        // router.push({ name: 'Login' });
      }
      const camelizeData = camelizeKeys(response.data);
      return {
        ...response,
        data: {
          ...camelizeData,
        },
      };
    },
  ],
};
export { RESPONSE_INTECEPTORS }
