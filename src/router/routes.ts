import { defineAsyncComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { Login } from 'blogex-cms/pages/login';
// 路由的命名name
const enum RoutesNames {
    Login = 'Login',
}
// 路由配置列表
const routes: Array<RouteRecordRaw> = [
    // 登录页面
    {
        path: '/login',
        name: RoutesNames.Login,
        component: Login,
    }
];
export default routes;