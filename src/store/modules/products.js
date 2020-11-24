
import * as shop from '@/api/shop'

const state = {
  all: []
}
const mutations = {
  setAll(state, payload) {
    state.all = payload.data;
  },
  deProducts(state, payload) {
    console.log(payload.id);
    const cartItem = state.all.find(i => i.id === payload.id);
    cartItem.totality--
  }
}
const actions = {
  async getAll({ commit }) {
    const data = await shop.getAllData();
    commit({
      type: 'setAll',
      data
    })
  }
}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
