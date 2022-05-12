<template>
  <div>{{ msg }}</div>
</template>

<script>
import { createNamespacedHelpers, mapState } from "vuex";
const { mapActions } = createNamespacedHelpers("promise");
export default {
  name: "promiseList",
  computed: {
    ...mapState({
      msg: state => state.promise.msg,
    }),
  },
  created() {
    this.setMsg("这是承诺页面");
  },
  methods: {
    ...mapActions(["setMsg"]),
  },
};
</script>

<style scoped></style>
