<template lang="pug" src="./navigation.pug"></template>

<script>
import { closeMenu } from 'resources/mixins'

export default {
  computed: {
    links () {
      return this.$router.options.routes
    },
    props () {
      return this.$store.state.app.nav
    }
  },
  mixins: [closeMenu],
  methods: {
    toggleMenu () {
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
      this.$store.state.menu ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    },
    handleClick (i) {
      if (i === 'loc') {
        this.$refs.phone.classList.remove('navigation__item--active')
        this.$refs.location.classList.contains('navigation__item--active') ? this.$refs.location.classList.remove('navigation__item--active') : this.$refs.location.classList.add('navigation__item--active')
      }
      if (i === 'phone') {
        this.$refs.location.classList.remove('navigation__item--active')
        this.$refs.phone.classList.contains('navigation__item--active') ? this.$refs.phone.classList.remove('navigation__item--active') : this.$refs.phone.classList.add('navigation__item--active')
      }
    }
  }
}
</script>
