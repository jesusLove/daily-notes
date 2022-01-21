import React, { useEffect, useRef, useState } from 'react'

const Home = (props) => {
  const [count, setCount] = useState(0)
  console.log('Home 刷新')
  // ! 为了 clickHeader 能输出 count 最新的值，需要在将 count 添加到依赖数组中。
  // ! 这样会导致 count改变，Header 就会重新渲染。
  
  // !! 如何解决这个问题？
  // 1. 创建一个 countRef
  const countRef = useRef(count)
  
  // 2. 依赖 countRef ，由于浅层对比，不会导致更新
  const clickHeader = React.useCallback(() => {
    console.log('click header', countRef.current)
  }, [countRef])
  
  // 3. 当 count 更新时，更新 countRef 的值。
  useEffect(() => {
    countRef.current = count
  }, [count])

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <Header onClick={clickHeader} />
      <Footer />
    </div>
  )
}
// React.memo 在 props 改变是才会更新
const Header = React.memo(({ onClick }) => {
  console.log('Header 刷新')
  return <div onClick={onClick}>Header</div>
})

// 只要 Home 重新渲染就会更新
const Footer = (props) => {
  console.log('Footer 刷新')
  return <div>Footer</div>
}

export default Home
