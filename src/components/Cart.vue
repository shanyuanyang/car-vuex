<template>
  <div>
    cart
    <ul>
      <li
        v-for="item in cartProducts"
        :key="item.id"
      >
        <span>{{item.name}}</span>
        ---
        <span>{{item.price}}</span>
        *
        <span>{{item.quantity}}</span>
      </li>
    </ul>
    <p>总价格：{{totlePrice}}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters("cart", ["cartProducts", "totlePrice"]),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
