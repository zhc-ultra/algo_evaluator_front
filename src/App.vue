<template>
  <div id="app">
    <basic-layout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
// 全局路由拦截（鉴权）
router.beforeEach((to, from, next) => {
  // 当前页面需要管理员权限
  if (to.meta?.access === "admin") {
    // 鉴权
    if (store.state.user.loginUser.userRole !== "admin") {
      // 权限不足，进行拦截
      next("noAuth");
      return;
    }
    // 权限足够，放行
  }
  next();
});
</script>
