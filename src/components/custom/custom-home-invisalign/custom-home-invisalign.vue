<template lang="pug" src="./custom-home-invisalign.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      invisalign: 0,
      patients: 0,
      adults: 0,
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
    increment () {

    }
  }
}
</script>
