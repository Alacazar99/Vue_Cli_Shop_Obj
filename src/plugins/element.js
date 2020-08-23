import Vue from 'vue'
import { Button, form, formItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(form)
Vue.use(formItem)
Vue.use(Input)
// 全局挂载
Vue.prototype.$message = Message
