<template>
  <div class="home">
    <CodeEditor />
    <MDEditor :value="value" :handle-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MDEditor from "@/components/MDEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue";

const value = ref();
const onChange = (v: string) => {
  value.value = v;
};
</script>
