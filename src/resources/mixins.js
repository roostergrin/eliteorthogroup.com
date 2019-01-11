export const closeMenu = {
  methods: {
    closeMenu () {
      this.$store.dispatch('VIEW_MENU', false)
    }
  }
}
