<template lang="pug" src="./custom-home-instagram.pug"></template>

<script>
import { onScroll } from 'resources/mixins'
import axios from 'axios'
import api from 'api'

export default {
  mixins: [onScroll],
  props: ['props'],
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25]
      },
      instagram: null
    }
  },
  async created () {
    this.instagram = await axios.get(`${api}/rg-instagram/v1/get-photos`)
  }
}
</script>
