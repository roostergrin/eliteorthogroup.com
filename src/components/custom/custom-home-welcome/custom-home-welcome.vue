<template lang="pug" src="./custom-home-welcome.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll]
}
</script>
