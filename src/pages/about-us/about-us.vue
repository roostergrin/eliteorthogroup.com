<template lang="pug" src="./about-us.pug"></template>

<script>
import Doctor from 'custom/custom-about-doctor/custom-about-doctor'
import Hero from 'components/hero/hero-option/hero-option'
import Team from 'custom/custom-about-team/custom-about-team'

export default {
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    Doctor,
    Hero,
    Team
  }
}
</script>
>
