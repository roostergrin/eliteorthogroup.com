<template lang="pug" src="./about-us.pug"></template>

<script>
import Doctor from 'custom/custom-about-doctor/custom-about-doctor'
import Hero from 'components/hero/hero-option/hero-option'

export default {
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    Doctor,
    Hero
  }
}
</script>
>
