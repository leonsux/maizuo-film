<template>
  <div>
    <swiper :options="swiperOption"  ref="mySwiper">  
      <!-- 这部分放你要渲染的那些内容 -->  
      <swiper-slide :key="item.id" v-for="item in banners">
        <img class="banner-img" :src="item.imageUrl" alt="" :title="item.name">
      </swiper-slide>  
      <!-- 这是轮播的小圆点 -->  
      <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>
  </div>
</template>

<script>
  import axios from 'axios'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'app-banner',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          pagination: '.swiper-pagination',
          // slidesPerView: 'auto',
          // centeredSlides: true,
          // paginationClickable: true,
          autoplay: {
            delay: 2000
          },
          speed: 300,
          // autoplayDisableOnInteraction: false,
          loop: true
        },
        banners: []
      }
    },
    methods: {
      getData () {
        axios.get('http://localhost:8080/mz/v4/api/billboard/home', {
          params: {__t: Date.now()}
        }).then((result) => {
          // console.log(result)
          this.banners = result.data.data.billboards
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style>
  .banner-img{
    width: 100%;  
  }
</style>
