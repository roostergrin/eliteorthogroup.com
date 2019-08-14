import axios from 'axios'
import api from 'api'
import jsonp from 'jsonp'
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

const actions = {
  GET_PAGES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?page=1&per_page=100`)
        const total = response.headers['x-wp-totalpages']
        let page = 1

        while (page < total) {
          page++
          let res = axios.get(`${api}/wp/v2/pages?page=${page}&per_page=100`)
          response.data.concat(res.data)
        }

        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: {title: data.title.rendered, ...data.acf} }),
          {}
        )
        commit(GET_PAGES, data)
      } catch (e) {
        console.log('PAGES API: ' + e)
      }
    })()
  },
  GET_APP ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: { ...data.acf } }),
          {}
        )
        commit(GET_APP, data)
      } catch (e) { console.log('APP API: ' + e) }
    })()
  },
  // GET_BLOG ({ commit }) {
  //   (async () => {
  //     try {
  //       const response = await axios.get(`${api}/wp/v2/posts?per_page=10&_embed`)
  //       commit(GET_BLOG, response)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // },
  GET_INSTAGRAM ({ commit }) {
    (async () => {
      try {
        jsonp('https://api.instagram.com/v1/users/335807461/media/recent?access_token=335807461.8fd4b68.28583fe3701b4a989e65e1d5f926664e', null, (err, res) => {
          if (err) {
            console.log(err.message)
          } else {
            const data = res.data.reduce((allData, data) => {
              let newData = { image: data.images.standard_resolution.url, text: data.caption.text, video: data.videos, link: data.link }
              allData.push(newData)
              return allData
            }, [])
            commit(GET_INSTAGRAM, data)
          }
        })
        // const response = await axios.get('https://api.instagram.com/v1/users/335807461/media/recent?access_token=335807461.aea5151.e67a2b8c7aec4d6e8963a67bca2eec68')
        // const data = response.data.data.reduce((allData, data) => {
        //   let newData = { image: data.images.standard_resolution.url, text: data.caption.text, video: data.videos, link: data.link }
        //   allData.push(newData)
        //   return allData
        // }, [])
        // commit(GET_INSTAGRAM, data)
        // console.log(data)
      } catch (e) { console.log('INSTA API: ' + e) }
    })()
  },
  VIEW_NAV ({ commit }, data) {
    commit(VIEW_NAV, data)
  },
  VIEW_BODY ({ commit }, data) {
    commit(VIEW_BODY, data)
  },
  VIEW_TYPES ({ commit }, data) {
    commit(VIEW_TYPES, data)
  },
  VIEW_SHOWMODAL ({ commit }, data) {
    commit(VIEW_SHOWMODAL, data)
  },
  VIEW_MODALCONTENT ({ commit }, data) {
    commit(VIEW_MODALCONTENT, data)
  },
  VIEW_MENU ({ commit }, data) {
    commit(VIEW_MENU, data)
  },
  IS_MOBILE ({ commit }, data) {
    commit(IS_MOBILE, data)
  }
}

export default actions
