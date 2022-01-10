# 状态管理

Flux、Redux、Mobx、Recoil

首先介绍 Flux，Flux 是一种使用单向数据流的形式来组合 React 组件的应用架构。
Flux 包含了 4 个部分，分别是 Dispatcher、 Store、View、Action。Store 存储了视图层所有的数据，当 Store 变化后会引起 View 层的更新。如果在视图层触发一个 Action，就会使当前的页面数据值发生变化。Action 会被 Dispatcher 进行统一的收发处理，传递给 Store 层，Store 层已经注册过相关 Action 的处理逻辑，处理对应的内部状态变化后，触发 View 层更新。

Flux 的优点是单向数据流，解决了 MVC 中数据流向不清的问题，使开发者可以快速了解应用行为。从项目结构上简化了视图层设计，明确了分工，数据与业务逻辑也统一存放管理，使在大型架构的项目中更容易管理、维护代码。

其次是 Redux，Redux 本身是一个 JavaScript 状态容器，提供可预测化状态的管理。社区通常认为 Redux 是 Flux 的一个简化设计版本，但它吸收了 Elm 的架构思想，更像一个混合产物。它提供的状态管理，简化了一些高级特性的实现成本，比如撤销、重做、实时编辑、时间旅行、服务端同构等。

Redux 的核心设计包含了三大原则：单一数据源、纯函数 Reducer、State 是只读的。

Redux 中整个数据流的方案与 Flux 大同小异。

Redux 中的另一大核心点是处理“副作用”，AJAX 请求等异步工作，或不是纯函数产生的第三方的交互都被认为是 “副作用”。这就造成在纯函数设计的 Redux 中，处理副作用变成了一件至关重要的事情。社区通常有两种解决方案：

第一类是在 Dispatch 的时候会有一个 middleware 中间件层，拦截分发的 Action 并添加额外的复杂行为，还可以添加副作用。第一类方案的流行框架有 Redux-thunk、Redux-Promise、Redux-Observable、Redux-Saga 等。

第二类是允许 Reducer 层中直接处理副作用，采取该方案的有 React Loop，React Loop 在实现中采用了 Elm 中分形的思想，使代码具备更强的组合能力。

除此以外，社区还提供了更为工程化的方案，比如 rematch 或 dva，提供了更详细的模块架构能力，提供了拓展插件以支持更多功能。

Redux 的优点很多：结果可预测；代码结构严格易维护；模块分离清晰且小函数结构容易编写单元测试；Action 触发的方式，可以在调试器中使用时间回溯，定位问题更简单快捷；单一数据源使服务端同构变得更为容易；社区方案多，生态也更为繁荣。

最后是 Mobx，Mobx 通过监听数据的属性变化，可以直接在数据上更改触发 UI 的渲染。在使用上更接近 Vue，比起 Flux 与 Redux 的手动挡的体验，更像开自动挡的汽车。Mobx 的响应式实现原理与 Vue 相同，以 Mobx 5 为分界点，5 以前采用 Object.defineProperty 的方案，5 及以后使用 Proxy 的方案。它的优点是样板代码少、简单粗暴、用户学习快、响应式自动更新数据让开发者的心智负担更低。

## Redux

## Mobx

响应式状态管理库，类似于 Vue 响应式原理。

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
