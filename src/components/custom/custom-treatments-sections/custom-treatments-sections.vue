<template lang="pug" src="./custom-treatments-sections.pug"></template>

<script>

export default {
  data () {
    return {
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25]
      }
    }
  },
  props: ['props'],
  methods: {
    onScroll ({el, going}) {
      if (going === 'in') {
        el.classList.add('custom-treatments-sections__section--active')
      }
    }
  }
}
</script>
