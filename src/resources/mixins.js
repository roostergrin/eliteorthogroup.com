export const closeMenu = {
  methods: {
    closeMenu () {
      console.log('click')
      this.$store.dispatch('VIEW_MENU', false)
    }
  }
}
