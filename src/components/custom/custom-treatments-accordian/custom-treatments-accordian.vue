<template lang="pug" src="./custom-treatments-accordian.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      activeTab: null,
      open: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll],
  methods: {
    handleClick (i) {
      if (this.activeTab === i) {
        this.open = false
        this.activeTab = null
      } else {
        this.open = true
        this.activeTab = i
      }
    }
  }
}
</script>
