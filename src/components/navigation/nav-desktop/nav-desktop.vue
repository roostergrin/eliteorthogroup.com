<template lang="pug" src="./nav-desktop.pug"></template>

<script>
export default {
  computed: {
    links () {
      return this.$router.options.routes
    },
    props () {
      return this.$store.state.app.nav
    }
  },
  methods: {
    toggleMenu () {
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
    }
  }
}
</script>
