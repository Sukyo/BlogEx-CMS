import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to) => {
    document.title = `BlogEx-CMS系统-${to.meta.title}`;
})
export default router;