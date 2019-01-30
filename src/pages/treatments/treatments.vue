<template lang="pug" src="./treatments.pug"></template>

<script>
import Accordian from 'custom/custom-treatments-accordian/custom-treatments-accordian'
import Hero from 'components/hero/hero-pages/hero-pages'
import Sections from 'custom/custom-treatments-sections/custom-treatments-sections'

import Loader from 'components/loader/loader'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Accordian,
    Hero,
    Sections,
    Loader
  }
}
</script>
