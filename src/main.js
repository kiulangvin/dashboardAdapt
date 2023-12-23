// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'


import directives from './directives/index';

import * as echarts from "echarts";

import { fitChartSize } from './utils/fitChartSize'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.use(directives) // 调用安装指令

app.config.globalProperties.$fitChartSize = fitChartSize    
app.config.globalProperties.$echarts = echarts;

app.mount('#app')
