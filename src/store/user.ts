// 存放用户的全局状态
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  // 记录用户的全局状态
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: "notLogin",
    },
  }),
  // 执行异步操作，触发mutations的更改
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getLoginUser({ commit, state }, playload): any {
      // TODO 远程登录
      commit("updateUser", { userName: "Zhc" });
    },
  },
  // 同步更新变量
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
