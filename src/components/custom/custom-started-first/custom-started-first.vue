<template lang="pug" src="./custom-started-first.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      upper: [],
      lower: [],
      active2: false,
      bannerActive: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.15]
      },
      secondOptions: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  created () {
    this.upper = this.props.items.slice(0, 2)
    this.lower = this.props.items.slice(2, 4)
  },
  props: ['props'],
  mixins: [onScroll],
  methods: {
    onSecondScroll ({going}) {
      if (going === 'in') {
        this.active2 = true
      }
    },
    onBannerScroll ({going}) {
      if (going === 'in') {
        this.bannerActive = true
      }
    }
  }
}
</script>
