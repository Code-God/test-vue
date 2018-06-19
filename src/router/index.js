import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import login from '@/components/demo1/login'
import test from '@/components/demo3/test'
import HelloWorld from '@/components/demo4/HelloWorld'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'INDEX',
      component: Index,
      children: [
        {
          path: 'test1',
          name: 'Login',
          component: login
        },
        {
          path: 'test2',
          name: 'TEST',
          component: test
        },
        {
          path: 'test3',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
