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
