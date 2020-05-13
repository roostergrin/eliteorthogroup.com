<template lang="pug" src="./custom-virtual-consult-sections.pug"></template>

<script>
import { onScroll } from '@/resources/mixins'

export default {
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  // props: {
  //   props: {
  //     type: [Object, Array]
  //   }
  // },
  mixins: [onScroll],
  mounted () {
    console.log(this.props)
  }
}
</script>
