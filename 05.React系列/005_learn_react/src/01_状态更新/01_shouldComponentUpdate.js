import React, { Component, PureComponent } from 'react'

class Home extends PureComponent {
  state = {
    counter: 0,
    message: 'Hello'
  }
  render() {
    console.log("Home 刷新");
    return <div>
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.changeText}>Change</button>
      </div>
      <Header/>
      <Footer/>
    </div>
  }
  // 等价于 extends PureComponent 
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.counter !== this.state.counter) {
  //     return true
  //   }
  //   return false
  // }

  add = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  changeText = () => {
    // 继承 Component 时， 即使 render 中不使用 message 也会导致重新渲染
    // 需要手动设置 shouldComponentUpdate
    // 继承自 PureComponent 时，则不会重新渲染。
    this.setState({
      message: "你好啊"
    })
  }
}
function Header(props) {
  console.log("Header 刷新");
  return <div>Header</div>
}

function Footer(props) {
  console.log("Footer 刷新");
  return <div>Footer</div>
}



export default Home
