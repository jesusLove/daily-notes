# 01.原型到原型链

基本概念：`prototype`、`__proto__`、`constructor`

- 每个函数都有一个 prototype 属性, 指向实例对象原型 Person.prototype
- 实例对象 `__proto__` 属性指向其原型对象，和构造函数 prototype 属性指向相同。由于 `__proto__` 非标准，使用 Object.getPrototypeOf() 函数代替
- 原型对象通过 constructor 属性可以获取到构造函数
- 原型链核心 => `__proto__`

**鸡生蛋、蛋生鸡问题**

`Function.__proto__ === Function.prototype`

Function 作为内置对象，运行前就已经存在。猜测官方设计的目的为了风格统一、表明关系。

## 示例代码

1. [原型](./01.原型到原型链/001.prototype.js)
2. [`__proto__`](./01.原型到原型链/002.__proto__.js)
3. [constructor](./01.原型到原型链/003.constructor.js)
4. [实例、原型]('./../01.原型到原型链/004.实例与原型.js)

# 02.词法作用域和动态作用域

- 作用域指程序中定义变量和函数的区域
- 作用域中定义了变量查找逻辑——访问权限。
- JavaScript 是词法作用域，也就是静态作用域

## 静态作用域 vs 静态作用域

- 静态作用域：函数的作用域在函数定义的时候已确定。
- 动态作用域：在函数调用时才确定，如：bash

两者区别：作用域顺序不同

## 示例代码

1. [静态作用域 - JS](./02.词法作用域和动态作用域/001.scope.js)
2. [动态作用域 - Bash](./02.词法作用域和动态作用域/001.scope.bash)
3. [Javascript 权威指南测验 - JS](./02.词法作用域和动态作用域/002.test.js)

# 03. 执行上下文栈（ECS）

执行上下文：全局、函数、Eval 三种，执行上下文通过执行上下文栈进行管理。

## 示例代码

1. [执行上下文栈](./03.执行上下文栈/002.stack.js)
2. [JavaScript 权威指南 - 测验](./03.执行上下文栈/003.test.js)

# 04. 变量对象

执行上下文有三个重要属性：变量对象（VO）、作用域链（Scope chain）、this。

变量对象：存储上下文中定义的变量和函数声明。不同上下文中的变量对象稍有不同。

- 全局上下文中变量对象是 window 对象。
- 函数上下文中活动对象（AO）标识变量对象。VO 和 AO 是一个东西，前者是规范或引擎定义的 JS 无法访问。
- 当进入上下文时，VO 被激活成为 AO 才能被访问。 AO 在进入上下文时被创建，通过函数 arguments 属性初始化。

## 示例

1. [AO 创建和执行示例](./04.变量对象/002.函数上下文.js)

# 05. 作用域链

多个执行上下文变量对象构成的链表称为作用域链。

## 函数创建

JavaScript 是静态作用域，在函数创建时作用域链就已经确定

函数内部属性 [[scope]] ，当函数创建时，保存所有父变量对象到其中，可以理解为 [[scope]] 就是所有变量对象的层次链。

## 函数激活

函数激活时，创建 VO/AO 后，会将活动对象添加到作用域链的最前端。

执行上下文的作用域链，命名为 Scope。

Scope = [AO].concat([[Scope]])

# 06. ECMAScript 规范解读 this

[ECMAScript 规范解读 this](https://github.com/mqyqingfeng/Blog/issues/7)

# 07. 执行上下文

执行上下文三个重要属性：变量对象、作用域链、this。

例子：

```js
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
checkscope()

// 1. 执行全局，创建全局上下文压入执行上下文栈中。
ECStack = [
  globalContext
]
// 2. 全局上下文初始化
globalContext = {
  VO: [global],
  Scope: [globalContext.VO],
  this: globalContext.VO
}
// 3. 初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]
checkscope.[[scope]] = [
  globalContext.VO
]
// 4. 执行 checkscope 函数，创建 checksope 函数执行上下文压入栈中。
ECStack = [
  checkscopeContext,
  globalContext
]

// 5. checkscope 函数执行上下文初始化
// 1. 复制函数 [[scope]] 属性创建作用域链，
// 2. 用 arguments 创建活动对象，
// 3. 初始化活动对象，即加入形参、函数声明、变量声明，
// 4. 将活动对象压入 checkscope 作用域链顶端。
// 同时 f 函数被创建，保存作用域链到 f 函数内部属性[[scope]]

checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope: undefined,
    f: reference to function f(){}
  },
  Scope: [AO, globalContext.VO],
  this: undefined
}

// 6. 执行 f 函数创建上下文，压入栈中
ECStack = [
  fContext,
  checkscopeContext,
  globalContext
]

// 7. 函数执行上下文创建
// 复制函数 [[scope]] 属性创建作用域链
// 用 arguments 创建活动对象
// 初始化活动对象，即加入形参、函数声明、变量声明
// 将活动对象压入 f 作用域链顶端
fContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    Scope: [AO, checkscopeContext.AO, globalContext.VO],
    this: undefined
}

// 8. f 函数执行，沿着作用域链查找scope值，返回 scope 值。

// 9. f 函数执行完毕，f 函数从栈中弹出

ECStack = [
  checkscopeContext,
  globalContext
]
// 10. checkscope 执行完毕

ECStack = [
  globalContext
]
```

另一个例子：

```js
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
checkscope()()
```

# 08. 闭包

ECMAScript 中，闭包指的是：

1. 理论角度：所有的函数都是闭包。
2. 实践角度：即使上下文已经销毁，仍然存在；代码中引用自由变量。

还是 《JavaScript 权威指南》 例子

```js
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
var foo = checkscope()
foo()
```

执行过程：

1. 进入全局代码，创建全局上下文，全局上下文压入栈中。
2. 全局上下文初始化
3. 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文压入执行栈中。
4. checkscope 执行上下文初始化，创建变量对象，作用域链、this 等。
5. checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出。
6. 执行 f 函数，创建 f 函数执行上下文，f 执行上下文压入执行上下文栈。
7. f 执行上下文初始化，创建变量对象、作用域链、this 等
8. f 函数执行完毕，f 函数上下文从执行上文栈中弹出。

f 函数上下文维护一个作用域链：

```js
fContext = {
  Scope: [AO, checkscopeContext.AO, globalContext.VO]
}
```

通过 Scope 作用域链 f 函数可以读取到 checkScopeContext.AO 的值， f 函数引用了 checkscopeContext.AO 即使上下文销毁，依然可以读取的值。
