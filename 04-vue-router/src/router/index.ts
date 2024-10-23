import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/Users.vue'
import Rights from '@/components/menus/Rights.vue'
import Goods from '@/components/menus/Goods.vue'
import Orders from '@/components/menus/Orders.vue'
import Settings from '@/components/menus/Settings.vue'
import UserDetail from '@/components/user/UserDetail.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
     
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        { path: 'users/:id', component: UserDetail, props: true },
      ],
     
    },
    {
      path:'/login',
      name: 'login',
      component: Login,
     
    }
    
   
  ]
})



router.beforeEach((to, from) => {

  const token = localStorage.getItem('token')
  if(to.path =='/home' && !token ){ //访问后台，但是token不存在，跳转到登录页面
     return { name: 'login' }
  }

})


export default router
