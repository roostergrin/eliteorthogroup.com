<template lang="pug" src="./treatments.pug"></template>

<script>
import Accordian from 'custom/custom-treatments-accordian/custom-treatments-accordian'
import Hero from 'components/hero/hero-pages/hero-pages'
import Sections from 'custom/custom-treatments-sections/custom-treatments-sections'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    Accordian,
    Hero,
    Sections
  }
}
</script>
