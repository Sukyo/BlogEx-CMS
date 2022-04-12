<template>
    <el-button>哈哈哈</el-button>
</template>
<script lang="ts" setup>
import { request } from '@/services'
import { AxiosRequestConfig, Method } from 'axios';
import { Response } from './services/requests/types';
export interface VerifyCodeConfig {
    withCredentials?: boolean;
    method?: Method;
}
export interface ResponseData {
    expireTime: number,
    originalImage: string,
    slidingImage: string,
    xWidth: number,
    yHeight: number
}
const fetchVerifyCode = async <T>(config: VerifyCodeConfig): Promise<{
    data: T | null
}> => {
    const response = await request<Response<T>>({
        url: '/verify/sliderCode',
    })
    return response;
}
const response = await fetchVerifyCode<ResponseData>({});
console.log(response)
</script>
<style lang="scss" src="./app.scss">
</style>
