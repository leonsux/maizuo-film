import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

var state = {
  cart: [],
  test: 10
}

const getters = {
  total (state) {
    let mon = 0
    state.cart.forEach(item => {
      mon += item.price * item.num
    })
    return mon
  }
}

const mutations = {
  addToCart (state, params) {
    console.log(params)
    // state.cart.push(params)
    let isHas = state.cart.some(item => {
      if (item.id === params.id) {
        item.num++
        return true
      } else {
        return false
      }
    })

   alert(1)

    console.log(state)

    if (!isHas) {
      state.cart.push({id: params.id, name: params.name, price: params.price, num: 1})
    }

    localStorage.cart = JSON.stringify(state.cart)
  },
  initCart (state, cart) {
    state.cart = cart
  }
}

const actions = {
  addToCart ({commit}, params) {
    console.log(params)
    commit('addToCart', params)
  },
  initCart ({commit}) {
    let cart = JSON.parse(localStorage.cart || '[]')
    commit('initCart', cart)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
