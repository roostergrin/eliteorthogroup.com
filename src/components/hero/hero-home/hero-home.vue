<template lang="pug" src="./hero-home.pug"></template>

<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  props: ['props'],
  mounted () {
    setTimeout(() => { this.toggleBackground() }, 7500)
  },
  methods: {
    toggleBackground () {
      if (this.index === 1) {
        this.index = 0
      } else {
        this.index = 1
      }
      setTimeout(() => { this.toggleBackground() }, 7500)
    }
  }
}
</script>
