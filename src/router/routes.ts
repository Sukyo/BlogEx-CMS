import { RouteRecordRaw } from 'vue-router';
import Login from 'blogex-cms/pages/login/login.vue';
import Layout from 'blogex-cms/pages/layout/layout.vue';
import Dashboard from 'blogex-cms/pages/dashboard/dashboard.vue';
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