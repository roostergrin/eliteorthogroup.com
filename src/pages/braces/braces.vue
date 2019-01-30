<template lang="pug" src="./braces.pug"></template>

<script>
import Divider from 'components/divider/divider'
import Hero from 'components/hero/hero-option/hero-option'
import Life from 'custom/custom-braces-life/custom-braces-life'
import Types from 'custom/custom-braces-types/custom-braces-types'

import Loader from 'components/loader/loader'

export default {
  computed: {
    props () {
      return this.$store.state.pages.braces
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Hero,
    Life,
    Types,
    Loader
  }
}
</script>
