import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表；
import './assets/css/global.css'

import './plugins/element.js'

// 导入axios
import axios from 'axios'
// 请求配置路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'

 // axios请求拦截   
axios.interceptors.request.use(config => {     
   // 为请求头对象，添加 Token 验证的 Authorization 字段     
   config.headers.Authorization = window.sessionStorage.getItem('Token') 
   return config 
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
