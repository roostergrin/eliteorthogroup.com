<template lang="pug" src="./virtual-consult.pug"></template>

<script>
import Hero from 'components/hero/hero-virtual/hero-virtual'
import CustomVirtualConsultSections from 'components/custom/custom-virtual-consult-sections/custom-virtual-consult-sections'

export default {
  computed: {
    props () {
      return this.$store.state.pages['virtual-consult']
    }
  },
  components: {
    Hero,
    CustomVirtualConsultSections
  },
    created () {
    let smileSnap = document.createElement('script')
    smileSnap.setAttribute('src', 'https://us.smilemate.com/practice/resources/embed-flow.js')
    smileSnap.setAttribute('practice-token', '28ecd528-c9a0-4509-a955-2fed04214a69')
    smileSnap.setAttribute('flow-type', 'virtual-consultation')
    document.body.appendChild(smileSnap)
  },
  mounted () {
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded')
      // move iframe inside left div
      let iframeInterval = setInterval(myTimer, 1000)
      function myTimer () {
        let smIframe = document.getElementById('sm-scan-iframe')
        let leftHalf = document.querySelector('.custom-virtual-consult-sections__left-half')
        if (!!smIframe && !!leftHalf) {
          leftHalf.appendChild(smIframe)
          myStopFunction()
        }
      }
      function myStopFunction () {
        clearInterval(iframeInterval)
      }
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1')
      location.reload()
    }
  }
}
</script>
