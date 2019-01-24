<template lang="pug" src="./custom-invisalign-how.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.35]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll]
}
</script>
