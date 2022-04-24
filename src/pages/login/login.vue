<template>
    <section class="login">
        <div class="form">
            <el-form :model="data.formData" :rules="rules" label-width="60px" label-position="left" size="large">
                <h3 class="title">登录</h3>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="data.formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="data.formData.password"></el-input>
                </el-form-item>
                <el-button @click="onLoginClick" class="login-btn" type="primary" round>登录</el-button>
            </el-form>
        </div>
    </section>
    <SliderVerifyCode :slider-img-data="data.sliderImgData" />
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { verifySliderCode } from '../../services/login';
import SliderVerifyCode from '../../components/slider-verify-code/slider-verify-code.vue';
const data = reactive({
    // 表单数据-------------------------------------------------------------------------
    formData: {
        username: '123',
        password: '',
        sliderVerifyCode: '',
    },
    // 滑块验证码图片数据
    sliderImgData: {
        expireTime: 0,
        slidingImage: '',
        originalImage: '',
        xWidth: 0,
        yHeight: 0
    },
});
// 表单验证规则
const rules = Object.freeze({
    username: [{
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
    }],
    password: [{
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
    }]
});
// 拉取滑块验证码数据
const fetchVerifySliderCode = async () => {
    const response = await verifySliderCode();
    data.sliderImgData = reactive(response?.data?.data);
}
// 点击登录
const onLoginClick = () => {
    fetchVerifySliderCode();
}
</script>
<style lang="scss" src="./login.scss" scoped>
</style>