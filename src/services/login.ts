import { API_URL } from 'blogex-cms/config/api';
import { Method, AxiosRequestConfig } from 'axios';
import { request } from './index';
import { Request } from 'blogex-cms/services/requests/request';
import { Response, ResultInterface } from 'blogex-cms/services/requests/types';
export interface VerifySliderCodeResponse {
    expireTime: number,
    originalImage: string,
    slidingImage: string,
    xWidth: number,
    yHeight: number
}
/**
 * @description 获取滑块验证码
 */
const verifySliderCode = async (): Promise<Request<AxiosRequestConfig, ResultInterface<VerifySliderCodeResponse>>> => {
    return await request<AxiosRequestConfig, ResultInterface<VerifySliderCodeResponse>>({
        url: API_URL.USER.verifySliderCode,
    });
}
export {
    verifySliderCode
}