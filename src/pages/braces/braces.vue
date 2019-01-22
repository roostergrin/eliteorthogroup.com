<template lang="pug" src="./braces.pug"></template>

<script>
import Hero from 'components/hero/hero-option/hero-option'
import Life from 'components/custom/custom-braces-life/custom-braces-life'

export default {
  computed: {
    props () {
      return this.$store.state.pages.braces
    }
  },
  components: {
    Hero,
    Life
  }
}
</script>
