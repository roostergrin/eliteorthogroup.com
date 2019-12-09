import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import AboutUs from '@/pages/about-us/about-us'
import Braces from '@/pages/braces/braces'
import Contact from '@/pages/contact/contact'
import GetStarted from '@/pages/get-started/get-started'
import Home from '@/pages/home/home'
import Invisalign from '@/pages/invisalign/invisalign'
import Treatments from '@/pages/treatments/treatments'
import ThankYou from '@/pages/thank-you/thank-you'

// Resources
import Styleguide from '@/pages/styleguide/styleguide'
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
      path: '/get-started',
      name: 'Get Started',
      navigation: true,
      component: GetStarted
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      component: Invisalign
    },
    {
      path: '/braces',
      name: 'Braces',
      navigation: true,
      component: Braces
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: Treatments
    },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      component: Contact
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      navigation: false,
      component: ThankYou
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
