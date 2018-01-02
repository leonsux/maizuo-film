<template>
  <div class="app-box">
    <p v-if="!goods.length">啥也没有</p>
    <good-item v-for="item in goods" :key="item.id" :good="item"></good-item>
  </div>
</template>

<script>
  import axios from 'axios'
  import goodItem from './goodItem'
  export default {
    name: 'app-shop',
    data () {
      return {
        goods: []
      }
    },
    components: {
      goodItem
    },
    created () {
      axios.get('/static/goods.json')
        .then((res) => {
          this.goods = res.data
          console.log(this.goods)
        })
    }
  }
</script>
  
<style></style>