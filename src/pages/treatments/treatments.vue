<template lang="pug" src="./treatments.pug"></template>

<script>
import Hero from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    Hero
  }
}
</script>
