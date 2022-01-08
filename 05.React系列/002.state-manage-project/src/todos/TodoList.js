import React, { useState } from 'react'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const todoListState = atom({
  key: 'todoListState',
  default: []
})

function TodoList() {
  // 获取 todos 列表
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}

export default TodoList

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])
    setInputValue('')
  }
  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
let id = 0
function getId() {
  return id++
}

// 可以修改和删除值
function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const idx = todoList.findIndex((listItem) => listItem === item)
  // 编辑
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, idx, {
      ...item,
      text: value
    })
    setTodoList(newList)
  }
  // 切换状态
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, idx, {
      ...item,
      isComplete: !item.isComplete
    })
    setTodoList(newList)
  }
  // 删除
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, idx)
    setTodoList(newList)
  }

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
