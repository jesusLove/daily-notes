# 分类方法

- 二分法
- 矩阵法
- 公式法
- 过程法
- 要素法

# 过程法

从初始化、开发、构建、检查、发布等过程回答问题。

## 初始化

- create-react-app 初始化新项目，使用简单拓展能力麻烦，配置三方 react-app-rewired 库提供扩展能力。
- 国内类似 umi 和 dva 提供一站式解决方案。
- create-react-library 创建库
- Storybook 维护大规模组件

## 开发

- 路由 React-Router
- 样式 Scss、less
- 基础组件库：Antd
- 状态库：Redux、Mobx、Recoil
- 其他功能组件：
  - react-dnd 和 react-draggable 用于拖拽；
  - react-pdf-viewer 用于预览 PDF；
  - video-react 用于播放视频
  - react-window 和 react-virtualized 用于长列表。

## 构建

- Webpack：用户最多、支持大型前端项目，生态丰富。
- Rollup：专注于库开发、而非大型工程。支持多模块类型输出。
- esbuild：打包及压缩工具，性能强。

## 检查

检查分为两个方面：代码规范检查、代码测试。

代码规范检查使用 ESLint，加上插件配置，完成对 React 的静态检查。

代码测试，通常选择以下测试库：

- jest 测试框架，跑具体的测试用例
- enzyme 测试工具库，自带大量的测试工具函数，简化测试用例编写。
- react-testing-library 针对 React DOM 的测试工具库。
- react-hooks-testing-library 针对 Hooks 的测试库

## 发布

- CDN
- s3-plugin-webpack 识别构建后的静态文件进行上传。
