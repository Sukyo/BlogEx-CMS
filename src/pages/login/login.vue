<template>
    <section class="login">
        <div class="form">
            <el-form :model="formData" :rules="rules" label-width="60px" label-position="left" size="large">
                <h3 class="title">登录</h3>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formData.password"></el-input>
                </el-form-item>
                <el-button class="login-btn" type="primary" round>登录</el-button>
            </el-form>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { verifySliderCode } from '../../services/login';
// 表单数据-------------------------------------------------------------------------
const formData = reactive({
    username: '',
    password: '',
    sliderVerifyCode: ''
})
// 表单验证规则
const rules = {
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
}
const fetchVerifySliderCode = async () => {
    const response = await verifySliderCode();
    console.log(response.data.data)
}
// fetchVerifySliderCode();
</script>
<style lang="scss" src="./login.scss" scoped>
</style>