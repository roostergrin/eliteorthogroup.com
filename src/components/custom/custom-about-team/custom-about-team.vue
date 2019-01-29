<template lang="pug" src="./custom-about-team.pug"></template>

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
  mixins: [onScroll],
  methods: {
    onImageScroll ({el, going}) {
      if (going === 'in') {
        el.classList.add('custom-about-team__image-container--active')
      }
    }
  }
}
</script>
