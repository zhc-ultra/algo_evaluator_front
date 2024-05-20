<template>
  <div id="app">
    <!--通用布局组件-->
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
import accessEnum from "@/access/accessEnum";
import { computed, onMounted } from "vue";

const store = useStore();
const router = useRouter();

/**
 * 全局初始化入口，全局单词调用代码
 */
const doInit = () => {
  // TODO
  console.log("hello!");
};

onMounted(() => {
  doInit();
});

// 全局路由拦截（鉴权）
router.beforeEach((to, from, next) => {
  // 当前页面需要管理员权限
  if (to.meta?.access === accessEnum.ADMIN) {
    // 鉴权
    if (store.state.user.loginUser.userRole !== accessEnum.ADMIN) {
      // 权限不足，进行拦截
      next("noAuth");
      return;
    }
    // 权限足够，放行
  }
  next();
});
</script>
