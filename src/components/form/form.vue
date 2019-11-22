<template lang="pug" src="./form.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isFirstTime: false,
      firstTimeMessage: 'No, I am not a first time patient',
      newPatient: '',
      location: '',
      message: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false,
      active: ''
    }
  },
  computed: {
    form () {
      return this.$refs.form
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(res => {
          if (res) {
            this.onSubmit()
          }
        })
        .catch(e => { console.log(e) })
    },
    onSubmit () {
      this.formSubmitted = true
      if (this.isFirstTime) {
        this.firstTimeMessage = 'Yes, I am a first time patient'
      }
      else { this.firstTimeMessage = 'No, I am not a first time patient' }
      axios.post(this.postUrl, {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        newPatient: this.newPatient,
        firstTime: this.firstTimeMessage,
        location: this.location,
        message: this.message

      })
        .then(res => {
          this.active = ''
          this.clearForm()
          this.formSuccess = true
          setTimeout(() => { this.form.reset() }, 50)
        })
        .catch(e => { console.log(e) })
    },
    clearForm () {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.phone = ''
      this.newPatient = ''
      this.location = ''
      this.message = ''
    },
    focused (name) {
      this.active = name
    },
    handleClose () {
      this.formSubmitted = false
    }
  }
}
</script>
