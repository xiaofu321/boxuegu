import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import home from '@/components/Home/Home'
import dashboard from '@/components/dashboard/dashboard'
import userlist from '@/components/userList/userlist'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path:'',
          component:dashboard
        },
        {
          path:'/userlist',
          component:userlist
        }
      ]
    }
  ]
})
