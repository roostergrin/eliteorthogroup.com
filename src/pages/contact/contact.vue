<template lang="pug" src="./contact.pug"></template>

<script>
import Form from 'components/form/form'
import Header from 'custom/custom-contact-header/custom-contact-header'

export default {
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  },
  components: {
    Form,
    Header
  }
}
</script>
