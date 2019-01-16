<template lang="pug" src="./get-started.pug"></template>

<script>
import Hero from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  },
  components: {
    Hero
  }
}
</script>
