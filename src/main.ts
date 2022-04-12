import { createApp } from 'vue';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

createApp(App).use(ElementPlus, { locale }).mount('#app')
