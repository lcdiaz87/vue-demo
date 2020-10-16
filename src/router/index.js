import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import People from '@/components/People'
import Planet from '@/components/Planet'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/planets/{planetId}',
      name: 'Planet',
      component: Planet
    }
  ]
})
