<template lang="pug" src="./menu-mobile.pug"></template>

<script>
import { closeMenu } from 'resources/mixins'

export default {
  props: [ 'props' ],
  computed: {
    links () {
      return this.$router.options.routes
    }
  },
  mixins: [closeMenu]
}
</script>
