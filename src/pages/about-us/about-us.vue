<template lang="pug" src="./about-us.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    }
  }
}
</script>
>
