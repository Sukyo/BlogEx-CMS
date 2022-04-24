import { API_URL } from 'blogex-cms/config/api';
import { Method, AxiosRequestConfig } from 'axios';
import { request } from './index';
import { Request } from 'blogex-cms/services/requests/request';
import { Response, ResultInterface } from 'blogex-cms/services/requests/types';
export interface VerifySliderCodeResult {
    expireTime?: number,
    originalImage: string,
    slidingImage: string,
    xWidth: number | null,
    yHeight: number | null
}
/**
 * @description 获取滑块验证码
 */
export const verifySliderCode = async (): Promise<Request<AxiosRequestConfig, ResultInterface<VerifySliderCodeResult>>> => {
    return await request<AxiosRequestConfig, ResultInterface<VerifySliderCodeResult>>({
        url: API_URL.USER.verifySliderCode,
    });
}