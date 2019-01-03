<template lang="pug" src="./get-started.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  }
}
</script>
