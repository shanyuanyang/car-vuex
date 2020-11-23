<template>
  <div>
    cart
    <p>{{car}}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState("cart", {
      car: "car",
    }),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
