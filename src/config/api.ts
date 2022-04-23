// 根据当前环境配置baseurl 如果是本地环境则走代理
const BASE_URL = import.meta.env.MODE === 'development' ? '/api' : import.meta.env.VITE_BASE_URL;
export const API_URL = {
    // 用户API
    USER: {
        verifySliderCode: `${BASE_URL}/verify/sliderCode`,
    }
};
