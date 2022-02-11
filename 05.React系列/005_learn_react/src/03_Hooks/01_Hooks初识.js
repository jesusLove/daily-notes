import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState(0)

  // 替代生命周期：
  // didMount, didUpdate
  // 副作用限制，只有 count 改变是才触发副作用
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  // 副作用
  useEffect(() => {
    console.log(`You clicked ${count} times`)
  })

  // 需要清除的 Effect
  useEffect(() => {
    // 订阅
    return () => {
      // 取消订阅
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{msg}</p>
      <button onClick={() => setMsg('Hello, Lee')}>ChangeText</button>
    </div>
  )
}

export default Example
