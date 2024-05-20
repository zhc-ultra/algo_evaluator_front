// 存放用户的全局状态
import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  // 记录用户的全局状态
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: accessEnum.NOT_LOGIN,
    },
  }),
  // 执行异步操作，触发mutations的更改
  actions: {
    getLoginUser({ commit, state }, payload): any {
      // TODO 远程登录
      commit("updateUser", payload);
    },
  },
  // 同步更新变量
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
