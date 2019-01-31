<template lang="pug" src="./custom-invisalign-how.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      containerActive: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.35]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll],
  methods: {
    onScroll2 ({going}) {
      if (going === 'in') {
        this.containerActive = true
      }
    }
  }
}
</script>
