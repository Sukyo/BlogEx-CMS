import { createApp } from 'vue';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'blogex-cms/styles/init.css';
import router from 'blogex-cms/router';
import App from './App.vue';

const app = createApp(App);
app.use(router)
    .use(ElementPlus, { locale })
    .mount('#app')
