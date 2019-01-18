<template lang="pug" src="./custom-home-invisalign.pug"></template>

<script>
// import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      active: false,
      invisalign: 0,
      patients: 0,
      adults: 0,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      }
    }
  },
  props: ['props'],
  methods: {
    incrementInvisalign () {
      if (this.invisalign < this.props.satisfaction_percentage) {
        return this.invisalign++
      }
    },
    incrementPatients () {
      if (this.patients < this.props.patients_percentage) {
        return this.patients++
      }
    },
    incrementAdults () {
      if (this.adults < this.props.adults_percentage) {
        return this.adults++
      }
    },
    onScroll ({going}) {
      if (going === 'in') {
        this.active = true
        setInterval(this.incrementInvisalign, 23)
        setInterval(this.incrementPatients, 25)
        setInterval(this.incrementAdults, 26)
      }
    }
  }
}
</script>
