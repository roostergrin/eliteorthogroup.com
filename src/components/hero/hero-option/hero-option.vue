<template lang="pug" src="./hero-option.pug"></template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  },
  props: ['props'],
  mounted () {
    setTimeout(() => { this.active = true }, 350)
  }
}
</script>
