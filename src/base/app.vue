<template lang="pug" src="./app.pug"></template>

<script>
import Footer from 'components/footer/footer'
import Navigation from 'components/navigation/navigation'
import Menu from 'components/menu/menu'

export default {
  async created () {
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_APP')
    this.$store.dispatch('VIEW_NAV', false)
    this.$store.dispatch('VIEW_BODY', false)
    this.$store.dispatch('VIEW_TYPES', 0)
    this.$store.dispatch('VIEW_SHOWMODAL', false)
    this.$store.dispatch('VIEW_MODALCONTENT', false)
    this.$store.dispatch('VIEW_MENU', false)
    this.$store.dispatch('GET_INSTAGRAM')
  },
  async mounted () {
    if ((typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
      this.$store.dispatch('IS_MOBILE', true)
    }
  },
  components: {
    Footer,
    Navigation,
    Menu
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
