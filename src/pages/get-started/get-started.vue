<template lang="pug" src="./get-started.pug"></template>

<script>
import Divider from 'components/divider/divider-text/divider-text'
import First from 'custom/custom-started-first/custom-started-first'
import Hero from 'components/hero/hero-pages/hero-pages'
import Smiles from 'components/slider/slider-our-smiles/slider-our-smiles'

export default {
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  },
  components: {
    Divider,
    First,
    Hero,
    Smiles
  }
}
</script>
