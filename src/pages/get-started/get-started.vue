<template lang="pug" src="./get-started.pug"></template>

<script>
import Divider from 'components/divider/divider-text/divider-text'
import Hero from 'components/hero/hero-pages/hero-pages'

export default {
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  },
  components: {
    Divider,
    Hero
  }
}
</script>
