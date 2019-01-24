<template lang="pug" src="./invisalign.pug"></template>

<script>
import Divider from 'components/divider/divider'
import Hero from 'components/hero/hero-option/hero-option'
import How from 'custom/custom-invisalign-how/custom-invisalign-how'
import Technology from 'custom/custom-invisalign-technology/custom-invisalign-technology'

export default {
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    }
  },
  components: {
    Divider,
    Hero,
    How,
    Technology
  }
}
</script>
