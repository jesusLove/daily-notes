import React from 'react'
import CharacterCounter from './tutorial/RecoilTutorial'
import TodoList from './todos/TodoList'
import { RecoilRoot } from 'recoil'
function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  )
}
export default App
