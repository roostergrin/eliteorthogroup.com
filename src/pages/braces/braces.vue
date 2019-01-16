<template lang="pug" src="./braces.pug"></template>

<script>
import Hero from 'components/hero/hero-option/hero-option'

export default {
  computed: {
    props () {
      return this.$store.state.pages.braces
    }
  },
  components: {
    Hero
  }
}
</script>
