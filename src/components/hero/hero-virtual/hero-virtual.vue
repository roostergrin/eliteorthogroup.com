<template lang="pug" src="./hero-virtual.pug"></template>

<script>
import { navTrigger } from 'resources/mixins'

export default {
  data () {
    return {
      active: ''
    }
  },
  props: ['props'],
  mixins: [navTrigger],
  mounted () {
    setTimeout(() => { this.active = true }, 350)
  }
}
</script>
