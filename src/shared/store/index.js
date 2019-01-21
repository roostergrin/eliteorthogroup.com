import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    app: {},
    pages: {},
    nav: {},
    // blog: {},
    body: {},
    types: {},
    showModal: {},
    modalContent: {},
    menu: {},
    loading: true,
    mobile: false,
    insta: {}
  },
  mutations: mutations,
  actions: actions
})

export default store
