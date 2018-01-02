<template>
  <div class="app-box">
    {{cart}}
    <!-- {{$store.state.cart}} -->
    <div class="cart" v-for="item in cart">
      <span>{{ item.name }}--{{ item.price }}</span>
      <span><button>-</button>{{ item.num }} <button @click="addToCart( item)">+</button></span>
      
    </div>
    <h1>{{total}}</h1>

    <h3> {{ test }} </h3>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    name: 'app-cart',
    computed: {
      ...mapState(['cart', 'test']),
      ...mapGetters(['total'])
    },
    created () {
      // console.log(this)
      this.initCart()
    },
    methods: {
      ...mapActions(['addToCart', 'initCart'])
    }
  }
</script>

<style scoped>
  .cart{
    background: #0ff;
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 90%;
    margin: 5px auto;
    align-self: center;
  }
  button{
    width: 30px;
    height: 30px;
  }
</style>
