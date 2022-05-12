<template>
  <div>{{ msg }}</div>
</template>

<script>
import { createNamespacedHelpers, mapState } from "vuex";
const { mapActions } = createNamespacedHelpers("accident");

export default {
  name: "accidentList",
  computed: {
    ...mapState({
      msg: state => state.accident.msg,
    }),
  },
  created() {
    this.setMsg("这是事故页面");
  },
  methods: {
    ...mapActions(["setMsg"]),
  },
};
</script>

<style scoped></style>
