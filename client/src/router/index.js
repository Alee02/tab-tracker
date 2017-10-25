import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'

Vue.use(Router)

//  Designates how you hit different routes
export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
