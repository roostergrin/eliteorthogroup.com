<template lang="pug" src="./slider-testimonials.pug"></template>

<script>
import { onScroll } from 'resources/mixins'
export default {
  data () {
    return {
      show: 0,
      num: 1,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  mixins: [onScroll],
  async created () {
    setInterval(() => {
      if (this.show === (this.props.slides.length - 1)) {
        this.show = 0
        this.num = 1
      } else {
        this.show++
        this.num++
      }
    }, 8000)
  },
  methods: {
    moveSlide (i) {
      this.show = i
      this.num = (i + 1)
    }
  }
}
</script>
