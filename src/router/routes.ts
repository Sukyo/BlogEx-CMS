import { defineAsyncComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { Login } from 'blogex-cms/pages/login';
import { Layout } from 'blogex-cms/pages/layout';
import { Dashboard } from 'blogex-cms/pages/dashboard';
// 路由的命名name
const enum RoutesNames {
    Login = 'Login',
    Dashboard = 'Dashboard',
}
// 路由配置列表
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        component: Layout,
        children: [{
            path: '',
            name: RoutesNames.Dashboard,
            component: Dashboard,
        }]
    },
    // 登录
    {
        path: '/login',
        name: RoutesNames.Login,
        component: Login,
        meta: {
            title: '登录'
        }
    },
    // 兜底路由
    {
        path: '/:pathMatch(.*)*/',
        redirect: '/dashboard'
    },
];
export default routes;