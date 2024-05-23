<template>
  <div
    id="code-editor"
    ref="codeEditorRef"
    style="min-height: 400px; height: 60vh"
  />
</template>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted, ref } from "vue";

const codeEditorRef = ref();
const codeEditor = ref();
// 代码编辑框的默认值
const value = ref("");

onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: value.value,
    language: "java", // 语言
    automaticLayout: true, // 自动布局
    lineNumbers: "on", // 显示行号
    roundedSelection: false, // 圆角选择
    scrollBeyondLastLine: false, // 超出部分隐藏
    readOnly: false, // 只读
    theme: "vs-dark", // 样式
    tabSize: 4, // 缩进
    // minimap: {
    //   enabled: true, // 开启小地图
    // },
    colorDecorators: true,// 颜色装饰器
  });
});
</script>

<style scoped>

</style>
