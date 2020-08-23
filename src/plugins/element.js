import Vue from 'vue'
import { 
    Button, 
    form, 
    formItem, 
    Input, 
    Message,
    container,
    header, 
    aside,
    main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup
 } from 'element-ui'

Vue.use(Button)
Vue.use(form)
Vue.use(formItem)
Vue.use(Input)
Vue.use(container)
Vue.use(header)
Vue.use(aside)
Vue.use(main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
// 全局挂载
Vue.prototype.$message = Message
