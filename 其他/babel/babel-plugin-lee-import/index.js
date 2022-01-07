// [AST Explorer](https://astexplorer.net/)
export default function (babel) {
  const { types } = babel
  return {
    pre(state) {
      // 前置操作
    },
    visitor: {
      // 访问者代码
    },
    post(state) {
      // 后置操作
    }
  }
}
