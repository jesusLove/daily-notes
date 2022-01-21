import React, { useState } from 'react'

const Home = (props) => {
  const [count, setCount] = useState(0)
  console.log('Home 刷新')
  // !由于每次点击 Home 会重新渲染，导致 clickHeader 函数重新创建
  // 此时 Header 的 props 改变了，会导致重新渲染。
  // const clickHeader = () => {
  //   console.log('-----click header')
  // }
  // ! 解决方法：使用 useCallBack
  // const clickHeader = React.useCallback(() => {
  //   console.log('click Header')
  // }, [])


  // ! 问题来了，如果 clickHeader 中需要使用 count 会怎样呢
  const clickHeader = React.useCallback(() => {
    console.log('click header', count)
  }, [count])
  
  // ! 为了 clickHeader 能输出 count 最新的值，需要在将 count 添加到依赖数组中。
  // ! 这样会导致 count改变，Header 就会重新渲染。
  
  // !! 如何解决这个问题？



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
