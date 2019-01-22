<template lang="pug" src="./custom-braces-life.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      brushingActive: false,
      lowerActive: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25]
      },
      lowerOptions: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll],
  methods: {
    onSecondScroll ({going}) {
      if (going === 'in') {
        this.brushingActive = true
      }
    },
    onThirdScroll ({going}) {
      if (going === 'in') {
        this.lowerActive = true
      }
    }
  }
}
</script>
