import {
  GET_PAGES,
  // GET_BLOG,
  GET_APP,
  VIEW_NAV,
  VIEW_BODY,
  VIEW_TYPES,
  VIEW_SHOWMODAL,
  VIEW_MODALCONTENT,
  VIEW_MENU,
  GET_INSTAGRAM,
  IS_MOBILE
} from './mutation-types'

const mutations = {
  [GET_PAGES] (state, data) {
    state.pages = data
    state.loading = false
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  //   state.blog.current_page = {}
  //   state.blog.current_page.number = 1
  //   state.loading = false
  // },
  [GET_APP] (state, data) {
    state.app = data
  },
  [VIEW_NAV] (state, data) {
    state.nav = data
  },
  [VIEW_BODY] (state, data) {
    state.body = data
  },
  [VIEW_TYPES] (state, data) {
    state.types = data
  },
  [VIEW_SHOWMODAL] (state, data) {
    state.showModal = data
  },
  [VIEW_MODALCONTENT] (state, data) {
    state.modalContent = data
  },
  [VIEW_MENU] (state, data) {
    state.menu = data
  },
  [GET_INSTAGRAM] (state, data) {
    state.insta = data
  },
  [IS_MOBILE] (state, data) {
    state.mobile = data
  }
}

export default mutations
