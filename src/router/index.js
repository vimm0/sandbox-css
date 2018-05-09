import Vue from 'vue'
import Router from 'vue-router'
import Bulma from '@/components/Bulma'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bulma',
      component: Bulma
    }
  ]
})
