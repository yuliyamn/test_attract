import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.config.publicPath = process.env.publicPath;
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: Vue.config.publicPath,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
