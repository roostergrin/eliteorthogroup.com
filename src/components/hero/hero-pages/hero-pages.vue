<template lang="pug" src="./hero-pages.pug"></template>

<script>
import { navTrigger } from 'resources/mixins'

export default {
  props: ['props'],
  mixins: [navTrigger]
}
</script>
