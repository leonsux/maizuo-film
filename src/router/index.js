import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import App from '@/App'
import AppMain from '@/components/app_main/appMain'
import AppMovie from '@/components/app_movie/appMovie'
import Showing from '@/components/app_movie/app_showing_film'
import Toshow from '@/components/app_movie/app_toshow_film'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appMain',
      component: AppMain
    },
    {
      path: '/movie',
      name: 'appMovie',
      redirect: '/showing',
      component: AppMovie,
      children: [
        {
          path: '/showing',
          name: 'showing',
          component: Showing
        },
        {
          path: '/toshow',
          name: 'toshow',
          component: Toshow
        }
      ]
    }
  ]
})
