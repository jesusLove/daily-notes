# 状态管理

Redux、Mobx、Recoil

## Redux

## Mobx

响应式状态管理库

## Recoil

Recoil 是 Facebook 推出的数据流管理方案。基于 Immutablle 的数据流管理方案，

React 内置的状态管理的局限性

1. 兄弟组件间共享数据只能通过 state 提升到公共祖先中实现，可能会导致重新渲染一棵巨大的组件树。
2. Context 只能存储单一值，无法存储多个各自用于消费者的值的集合。
3. 无法将组件树的顶层（state 存在的地方）与叶子结点（使用 state 的地方）进行代码分隔。

> Recoil 定义了一个有向图 (directed graph)，正交同时又天然连结于你的 React 树上。状态的变化从该图的顶点（我们称之为 atom）开始，流经纯函数 (我们称之为 selector) 再传入组件。
> 基于这样的实现：
>
> - 我们可以定义无需模板代码的 API，共享的状态拥有与 React 本地 state 一样简单的 get/set 接口 (当然如果需要，也可以使用 reducer 等进行封装)。
> - 我们有了与 Concurrent 模式及其他 React 新特性兼容的可能性。
> - 状态的定义是渐进式和分布式的，这使代码分割成为可能。
> - 无需修改对应的组件，就能将它们本地的 state 用派生数据替换。
> - 无需修改对应的组件，就能将派生数据在同步与异步间切换。
> - 我们能将导航视为头等概念，甚至可以将状态的转变编码进链接中。
> - 可以很轻松地以可回溯的方式持久化整个应用的状态，持久化的状态不会因为应用的改变而丢失。

### 核心概念

Recoil 创建一个数据流向图，从 Atom 到 selector，再流向 React 组件。

- Atom 组件可以订阅的 state 单位。
- Selector 可以同步或异步改变 state。

```js
// 定义 Atom：代表一个状态
// 使用 useRecoilState 读取和修改值。
const textState = atom({
  key: 'textState',
  default: ''
})

// selector 代表一个派生状态。
// 通过 `useRecoilValue` 的 hook，来读取 charCountState 的值。
// 这个 selector 无法修改所以不能使用 useRecoilState 函数。
const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  }
})
```

使用 Atom 和 Selector 如下：

```js
// Atom 通过 useRecoilState 函数读取和设置。
const [text, setText] = useRecoilState(textState)

// 该 selector 只有 get 方法，使用 useRecoilValue 读取值
const count = useRecoilValue(charCountState)
```

> useRecoilValue : 仅用于读取值
> useRecoilState : 用于读取和写入值
> useSetRecoilState : 仅用于写入值

#### Atom

相当于 useState 可以在多个组件间数据共享。

> 参考示例 todos

#### Selector

代表 Atom 的派生状态，纯函数。

> 参考示例 todos
