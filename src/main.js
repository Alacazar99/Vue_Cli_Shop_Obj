import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表；
import './assets/css/global.css'

import './plugins/element.js'

import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入axios
import axios from 'axios'
import axios1 from 'axios'
// 请求配置路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'

// axios1.defaults.baseURL = '/apis'
 // axios请求拦截   

axios.interceptors.request.use(config => {     
   // 为请求头对象，添加 Token 验证的 Authorization 字段     
   config.headers.Authorization = window.sessionStorage.getItem('Token') 
   return config 
})
Vue.prototype.$http = axios
// Vue.prototype.$axios = axios1

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
// 将富文本编辑器，注册为全局可用的组件

// 时间格式转换
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
