<template lang="pug" src="./invisalign.pug"></template>

<script>
import Divider from 'components/divider/divider'
import Hero from 'components/hero/hero-option/hero-option'
import How from 'custom/custom-invisalign-how/custom-invisalign-how'
import Technology from 'custom/custom-invisalign-technology/custom-invisalign-technology'

import Loader from 'components/loader/loader'

export default {
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Hero,
    How,
    Technology,
    Loader
  }
}
</script>
