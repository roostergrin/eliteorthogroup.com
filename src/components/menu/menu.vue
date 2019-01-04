<template lang="pug" src="./menu.pug"></template>

<script>
export default {
  computed: {
    links () {
      return this.$router.options.routes
    }
  }
}
</script>
