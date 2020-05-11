<template lang="pug" src="./virtual-consult.pug"></template>

<script>
import CustomVirtualConsultSections from 'components/custom/custom-virtual-consult-sections/custom-virtual-consult-sections'

export default {
  name: 'Virtual Consult',
  computed: {
    props () {
      return this.$store.state.pages['virtual-consult']
    }
  },
  components: {
    CustomVirtualConsultSections
  },
  mounted () {
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded')
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1')
      location.reload()
    }
  }
}
</script>
