<template lang="pug" src="./custom-home-instagram.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25]
      }
    }
  },
  mixins: [onScroll],
  computed: {
    props () {
      return this.$store.state.insta.slice(0, 5)
    }
  }
}
</script>
