import React, { useState } from 'react'
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil'

const todoListState = atom({
  key: 'todoListState',
  default: []
})

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
})

// 内部跟踪两个依赖项： todoListFilterState 和 todoListState。
// 两个依赖有改变都会触发 get 函数
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete)
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  }
})

// 统计不同 todo 的数量
const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = todoList.filter(
      (item) => !item.isComplete
    ).length
    const precentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      precentCompleted
    }
  }
})

function TodoList() {
  // 获取 todos 列表
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}

export default TodoList

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, precentCompleted } =
    useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(precentCompleted)
  return (
    <ul>
      <li>Total stats: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}
function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({ target: { value } }) => {
    setFilter(value)
  }
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </>
  )
}

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
