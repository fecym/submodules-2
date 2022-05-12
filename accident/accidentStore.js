export default {
  namespaced: true,
  state: {
    msg: "",
  },
  mutations: {
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    setMsg({ commit }, msg) {
      commit("setMsg", msg);
    },
  },
};
