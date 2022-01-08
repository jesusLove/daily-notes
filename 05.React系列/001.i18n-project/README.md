# Context

提供一种组件共享数据的解决方案。

## 实现 I18n 国际化

### 1. 定义 Context

`./locales/I18nContext.js` 文件封装 Context 对象：

```js
import { createContext } from 'react'

const I18nContext = createContext({
  translate: () => '', // 获取键值
  getLocale: () => {}, // 获取语言
  setLocale: () => {} // 设置语言
})

export default I18nContext
```

### 2. 封装 Provider 组件简化代码

封装 Provider 组件，接收一个 value 参数，传递给消费者。一个 Provider 可以有多个消费者；Provider 也可以嵌套使用，里层的会覆盖外层的数据。

当 Provider 的 value 发生改变时，所有的消费组件都会重新渲染。消费者组件更新不受 `shouldComponentUpdate` 函数影响。

实现 `./locales/I18nProvider.js`

```js
import React from 'react'

import I18nContext from './I18nContext'

class I18nProvider extends React.Component {
  // 可以将数据存储到 WebStorage 中。
  state = {
    locale: 'zh-CN'
  }
  render() {
    const { locale } = this.state
    const i18n = {
      translate: (key) => this.props.languages[locale][key],
      getLocale: () => locale,
      setLocale: (locale) => this.setState({ locale })
    }
    return (
      <I18nContext.Provider value={i18n}>
        {this.props.children}
      </I18nContext.Provider>
    )
  }
}

export default I18nProvider
```

### 3. 封装消费者，高阶组件避免重复代码

共享 Context 数据，需要针对每一个组件包装一次消费者，会有大量重复代码。通过高阶组件封装减少重复代码数量。

实现 `./locales/withI18n.js`

```js
import React from 'react'

import I18nContext from './I18nContext'

const withI18n = (WrappedComponent) => {
  return (props) => (
    <I18nContext.Consumer>
      {(i18n) => <WrappedComponent {...i18n} {...props} />}
    </I18nContext.Consumer>
  )
}

export default withI18n
```

### 4. 注入 Provider

在 `./index.js` 中

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { I18nProvider } from './locales/i18n'

// 1. 语言种类
const locales = ['en-US', 'zh-CN']
// 2. 语言 json 文件
const languages = {
  'en-US': require('./locales/languages/en-US'),
  'zh-CN': require('./locales/languages/zh-CN')
}

ReactDOM.render(
  // 注册
  <I18nProvider locales={locales} languages={languages}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nProvider>,
  document.getElementById('root')
)
```

`locals/languages` 文件夹中定义中英文 json 数据。

```json
// en-US.json
{
  "title": "Title"
}
// zh-CN.json
{
  "title": "标题"
}
```

### 5. 使用 Context 国际化

在 App.js 中测试国际化是否生效。

```js
import { withI18n } from './locales/i18n'

function App() {
  return (
    <div className='App'>
      <h1>Context 实现 i18n</h1>
      <Title />
      <Footer />
    </div>
  )
}
export default App

// 使用
const Title = withI18n(({ translate }) => {
  return <div>{translate('title')}</div>
})

// 切换语言
const Footer = withI18n(({ setLocale, getLocale }) => {
  const locale = getLocale()
  return (
    <button
      onClick={() => {
        setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN')
      }}
    >
      切换语言
    </button>
  )
})
```

## 小结

通过 `i18n` 国际化理解 Context 实现原理。
