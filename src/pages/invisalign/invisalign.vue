<template lang="pug" src="./invisalign.pug"></template>

<script>
import Hero from 'components/hero/hero-option/hero-option'

export default {
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    }
  },
  components: {
    Hero
  }
}
</script>
