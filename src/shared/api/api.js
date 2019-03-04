const route = 'https://eliteorthogroup.com/wp-json'

const api = () => {
  return route
  // try {
  //   return (document.location.protocol === 'https:' ? 'https:' : 'http:') + route
  // } catch (e) {
  //   return 'https://' + route
  // }
}

export default api()
