const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin("monaco").use(
      new MonacoWebpackPlugin({
        languages: ["javascript", "java", "c++"], // 仅加载必要的语言
        features: ["coreCommands", "find"], // 仅加载必要的特性
      })
    );
    // config.plugin("monaco").use(new MonacoWebpackPlugin());
  },
});
