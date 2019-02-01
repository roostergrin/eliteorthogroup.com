<template lang="pug" src="./custom-about-doctor.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      imageActive: false,
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
    onImageScroll ({going}) {
      if (going === 'in') {
        this.imageActive = true
      }
    }
  }
}
</script>
