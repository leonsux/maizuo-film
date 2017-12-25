<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-header :changeIsNavShow="changeIsNavShow"></app-header>
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <app-nav v-if="isNavShow" :changeIsNavShow="changeIsNavShow"></app-nav>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div @click="isNavShow=false" v-if="isNavShow" class="mask"></div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from '@/components/app_header/appHeader'
  import AppNav from '@/components/app_nav/appNav'
  export default {
    name: 'app',
    components: {
      AppHeader, AppNav
    },
    data () {
      return {
        isNavShow: false
      }
    },
    methods: {
      changeIsNavShow () {
        this.isNavShow = !this.isNavShow
      }
    }
  }
</script>

<style lang='scss'>
  @import './styles/app.scss';
  body{
    font-size: 14px;
    .mask{
      position: fixed;
      top: 49px;
      background: rgba(0,0,0,0.5);
      height: 100%;
      width: 100%;
      z-index: 300;
      animation-duration: 0.5s;
    }
  }
</style>
