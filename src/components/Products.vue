<template>
  <div>
    products
    <ul>
      <li
        v-for="item in all"
        :key="item.id"
      >
        <span>{{item.name}}</span>
        ---
        <span>{{item.price}}</span>
        ---
        <span>{{item.totality}}</span>
        <button @click="addCart(item)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("products/getAll");
  },
  computed: {
    ...mapState("products", {
      all: "all",
    }),
  },
  methods: {
    ...mapActions('cart',['addCart'])
  },
};
</script>
<style lang="scss" scoped>
</style>
