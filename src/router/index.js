import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import users from '../components/user/users.vue'
import rights from '../components/power/rights.vue'
import roles from '../components/power/roles.vue'
import orders from '../components/order/orders.vue'
import reports from '../components/reports/report.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home ,children:[
      { path: '/' ,redirect: '/Welcome' },
      { path: '/Welcome', component: Welcome },
      { path: '/users', component: users },
      { path: '/rights', component: rights },
      { path: '/roles', component: roles },
      { path: '/orders', component: orders },
      { path: '/reports',component: reports }
    ]}
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     return next()
//   }
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('Token')
//   if (!tokenStr) { return next('/login') }
// })

export default router
