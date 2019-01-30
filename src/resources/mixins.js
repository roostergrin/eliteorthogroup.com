export const closeMenu = {
  methods: {
    closeMenu () {
      this.$store.dispatch('VIEW_MENU', false)
      document.body.classList.remove('body-stop')
    }
  }
}

export const onScroll = {
  data () {
    return {
      active: false
    }
  },
  methods: {
    onScroll ({going}) {
      if (going === 'in') {
        this.active = true
      }
    }
  }
}

export const navTrigger = {
  methods: {
    navTrigger ({going}) {
      if (going === 'in') {
        this.$store.dispatch('VIEW_NAV', false)
      }
      if (going === 'out') {
        this.$store.dispatch('VIEW_NAV', true)
      }
    }
  }
}
