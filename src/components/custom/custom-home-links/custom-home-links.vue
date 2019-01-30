<template lang="pug" src="./custom-home-links.pug"></template>

<script>
export default {
  data () {
    return {
      active: false,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25]
      }
    }
  },
  computed: {
    links () {
      return this.$refs.links
    }
  },
  props: ['props'],
  methods: {
    onScroll ({going}) {
      if (going === 'in') {
        this.active = true
        this.links.forEach(function (el, i) {
          setTimeout(() => { el.classList.add('custom-home-links__link--active') }, (i + 1) * 350)
        })
      }
    },
    handleRoute (obj) {
      this.$router.push(obj.path)
      if (obj.hash) {
        setTimeout(() => { this.$scrollTo(obj.hash) }, 150)
      }
    }
  }
}
</script>
