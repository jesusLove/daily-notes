import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
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

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      结果：{text}
    </div>
  )
}
function CharacterCount() {
  const count = useRecoilValue(charCountState)
  return <div>字符数：{count}</div>
}

export default CharacterCounter
