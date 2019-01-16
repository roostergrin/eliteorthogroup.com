<template lang="pug" src="./about-us.pug"></template>

<script>
import Hero from 'components/hero/hero-option/hero-option'

export default {
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  },
  components: {
    Hero
  }
}
</script>
>
