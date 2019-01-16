import Vue from 'vue'
import Icon from 'global/icon/icon'
import LazyImage from 'global/lazy-image/lazy-image'

const components = () => {
  Vue.component('Icon', Icon)
  Vue.component('LazyImage', LazyImage)
}

export default components()
