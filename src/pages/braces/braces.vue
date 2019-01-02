<template lang="pug" src="./braces.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.braces
    }
  }
}
</script>
