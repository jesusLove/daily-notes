import React from 'react'
import CharacterCounter from './tutorial/RecoilTutorial'
import TodoList from './todos/TodoList'
import AsyncData from './asyncData/AsyncData'

import { RecoilRoot } from 'recoil'
function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
      <ErrorBoundary>
        {/* 配置 React.Suspense  */}
        <React.Suspense fallback={<div>加载中。。。</div>}>
          <AsyncData />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  )
}
export default App

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    console.log('------------', error)
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
