<template lang="pug" src="./menu.pug"></template>

<script>
import Desktop from 'components/menu/menu-desktop/menu-desktop'
// import Mobile from 'components/menu/menu-mobile/menu-mobile'

export default {
  computed: {
    props () {
      return this.$store.state.app.nav
    }
  },
  components: {
    Desktop
    // ,
    // Mobile
  }
}
</script>
