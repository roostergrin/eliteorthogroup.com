<template lang="pug" src="./home.pug"></template>

<script>
import HeroHome from 'components/hero/hero-home/hero-home'
import Instagram from 'custom/custom-home-instagram/custom-home-instagram'
import Invisalign from 'custom/custom-home-invisalign/custom-home-invisalign'
import Links from 'custom/custom-home-links/custom-home-links'
import Testimonials from 'components/slider/slider-testimonials/slider-testimonials'
import Welcome from 'custom/custom-home-welcome/custom-home-welcome'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    HeroHome,
    Instagram,
    Invisalign,
    Links,
    Testimonials,
    Welcome
  }
}
</script>
