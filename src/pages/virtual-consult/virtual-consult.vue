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
  }
}
</script>
