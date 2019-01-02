import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import AboutUs from '@/pages/about-us/about-us'
import Braces from '@/pages/braces/braces'
import Home from '@/pages/home/home'

// Resources
import Styleguide from '@/pages/styleguide/styleguide'
// import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: true,
      component: Home
    },
    {
      path: '/about-us',
      name: 'About',
      navigation: true,
      component: AboutUs
    },
    {
      path: '/braces',
      name: 'Braces',
      navigation: true,
      component: Braces
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: Home
    }
  ],
  scrollBehavior
})

export default router
