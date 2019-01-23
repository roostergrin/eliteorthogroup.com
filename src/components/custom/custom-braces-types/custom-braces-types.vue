<template lang="pug" src="./custom-braces-types.pug"></template>

<script>
import { onScroll } from 'resources/mixins'
export default {
  data () {
    return {
      activeTab: 0,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll],
  methods: {
    onHover (i) {
      this.activeTab = i
    }
  }
}
</script>
