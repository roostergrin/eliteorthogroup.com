<template lang="pug" src="./slider-our-smiles.pug"></template>

<script>
import { onScroll } from 'resources/mixins'

export default {
  data () {
    return {
      activeBullet: 0,
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.5]
      },
      swiperOption: {
        lazy: true,
        loop: true,
        autoplay: {
          delay: 5000
        },
        centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: 3,
        speed: 650,
        slideActiveClass: 'slider-our-smiles__swiper-slide--active',
        breakpoints: {
          1024: {
            slidesPerView: 2
          },
          475: {
            slidesPerView: 1
          }
        },
        pagination: {
          el: '.slider-our-smiles__pagination',
          cliackable: true,
          bulletClass: 'slider-our-smiles__bullet',
          bulletActiveClass: 'slider-our-smiles__bullet--active'
        }
      }
    }
  },
  props: ['props'],
  mixins: [onScroll],
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    moveTo (j) {
      console.log(this.swiper)
      this.swiper.slideTo(j)
      this.activeBullet = j
    }
  }
}
</script>
