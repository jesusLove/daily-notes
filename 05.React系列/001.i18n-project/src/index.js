import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { I18nProvider } from './locales/i18n'

const locales = ['en-US', 'zh-CN']
const languages = {
  'en-US': require('./locales/languages/en-US'),
  'zh-CN': require('./locales/languages/zh-CN')
}

ReactDOM.render(
  <I18nProvider locales={locales} languages={languages}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
