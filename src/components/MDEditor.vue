<template>
  <Editor
    :value="value"
    :mode="mode"
    :plugins="plugins"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import "katex/dist/katex.css";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Editor, Viewer } from "@bytemd/vue-next";
import math from "@bytemd/plugin-math";

import { ref, withDefaults, defineProps } from "vue";

/**
 * 定义组件属性的类型
 * @param value 输入框的值
 * @param handleChange 输入框值改变时的回调函数
 */
interface Props {
  value: string;
  handleChange: (v: string) => void;
  mode?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {},
  mode: () => "split",
});

const plugins = [
  gfm(),
  // 代码高亮插件
  highlight(),
  math(),
];
</script>

<style>
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {
  display: none;
}
</style>
