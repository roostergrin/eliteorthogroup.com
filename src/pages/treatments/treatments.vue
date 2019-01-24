<template lang="pug" src="./treatments.pug"></template>

<script>
import Hero from 'components/hero/hero-pages/hero-pages'
import Sections from 'custom/custom-treatments-sections/custom-treatments-sections'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    Hero,
    Sections
  }
}
</script>
