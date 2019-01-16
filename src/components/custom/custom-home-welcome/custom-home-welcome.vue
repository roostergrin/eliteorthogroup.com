<template lang="pug" src="./custom-home-welcome.pug"></template>

<script>
// import Title from 'block/block-title/block-title'
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      active: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  // components: {
  //   Title
  // }
  mixins: [onScroll]
}
</script>
