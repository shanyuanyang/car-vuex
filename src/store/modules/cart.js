const state = {
  shoppingCart: []
}
const mutations = {
  addItemQuantity(state, payload) {
    const cartItem = state.shoppingCart.find(i => i.id === payload.id)
    cartItem.quantity++;
  },
  addShopCart(state, payload) {
    console.log(payload)
    state.shoppingCart.push({
      id: payload.id,
      quantity: 1,
    })
  }
}
const actions = {
  addCart({ state, commit }, product) {
    console.log(state.shoppingCart)
    console.log(product)
    if (product.totality) {
      let cartItem = state.shoppingCart.find(i => i.id === product.id)
      if (cartItem) {
        commit({
          type: 'addItemQuantity',
          id: product.id
        })
      } else {
        commit({
          type: "addShopCart",
          id: product.id
        })
      }
      commit('products/deProducts', { id: product.id }, { root: true })
    } else {
      console.log('商品为空了')
    }
  }
}
const getters = {
  cartProducts(state, getters, rootState) {
    return state.shoppingCart.map(i => {
      const prod = rootState.products.all.find(j => j.id === i.id);
      return {
        id: prod.id,
        price: prod.price,
        name: prod.name,
        quantity: i.quantity,
      }
    })
  },
  totlePrice(state, getters) {
    return getters.cartProducts.reduce((totle, prod) => {
      return totle + prod.price * prod.quantity
    }, 0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
