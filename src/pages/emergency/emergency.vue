<template lang="pug" src="./emergency.pug"></template>

<script>
import Hero from 'components/hero/hero-option/hero-option'
import CustomEmergencyIntro from 'components/custom/custom-emergency-intro/custom-emergency-intro'
import CustomEmergencySections from 'components/custom/custom-emergency-sections/custom-emergency-sections'

export default {
  name: 'Emergency',
  computed: {
    props () {
      return this.$store.state.pages['emergency']
    }
  },
  components: {
    Hero,
    CustomEmergencyIntro,
    CustomEmergencySections
  }
}
</script>
