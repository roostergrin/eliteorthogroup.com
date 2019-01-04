/* eslint-disable */

// ----------------------------
// to learn more about importing => https://github.com/typekit/webfontloader
// ----------------------------

var WebFont = require('webfontloader')

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Oxygen:300,400,700', 'Roboto+Slab:300,400' ]
    }
  })
}

export default fonts()
/* eslint-enable */
