<template>
  <div class="box">
    <span>{{good.name}}&nbsp;￥{{good.price}}</span>
    <span><button @click="addToCart(good)">加入购物车</button></span>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'good-item',
    props: ['good'],
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>
  .box{
    width: 90%;
    margin: 10px auto;
    height: 50px;
    background: #EBEBEB;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>