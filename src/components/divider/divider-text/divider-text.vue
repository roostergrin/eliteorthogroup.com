<template lang="pug" src="./divider-text.pug"></template>

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
  props: ['props'],
  mixins: [onScroll]
}
</script>
