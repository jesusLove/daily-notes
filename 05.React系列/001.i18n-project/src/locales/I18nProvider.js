import React from 'react'

import I18nContext from './I18nContext'

class I18nProvider extends React.Component {
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
