<template lang="pug" src="./home.pug"></template>

<script>
import HeroHome from 'components/hero/hero-home/hero-home'
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
    Welcome
  }
}
</script>
