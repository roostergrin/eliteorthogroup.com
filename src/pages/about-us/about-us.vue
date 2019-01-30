<template lang="pug" src="./about-us.pug"></template>

<script>
import Doctor from 'custom/custom-about-doctor/custom-about-doctor'
import Hero from 'components/hero/hero-option/hero-option'
import Offices from 'custom/custom-about-office/custom-about-office'
import Team from 'custom/custom-about-team/custom-about-team'

import Loader from 'components/loader/loader'

export default {
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Doctor,
    Hero,
    Offices,
    Team,
    Loader
  }
}
</script>
>
