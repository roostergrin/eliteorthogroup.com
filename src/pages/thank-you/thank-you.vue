<template lang="pug" src="./thank-you.pug"></template>

<script>
import Hero from 'components/hero/hero-option/hero-option'
import Loader from 'components/loader/loader'

export default {
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Hero,
    Loader
  }
}
</script>
