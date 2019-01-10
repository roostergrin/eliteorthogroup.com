<template lang="pug" src="./menu-desktop.pug"></template>

<script>
import { closeMenu } from 'resources/mixins'

export default {
  data () {
    return {
      hover: ''
    }
  },
  props: [ 'props' ],
  computed: {
    links () {
      return this.$router.options.routes
    }
  },
  mixins: [closeMenu],
  methods: {
    onHover (i) {
      this.hover = i + 1
    },
    onLeave () {
      this.hover = ''
    }
  }
}
</script>
