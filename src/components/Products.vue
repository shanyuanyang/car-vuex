import { mapState } from 'vuex';
<template>
  <div>
    products
    <p>{{pro}}</p>
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
    ...mapState("products", {
      pro: "pro",
    }),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
