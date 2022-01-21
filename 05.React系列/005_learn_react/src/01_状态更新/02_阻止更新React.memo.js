import React, { Component } from 'react'

class Home extends Component {
  state = {
    counter: 0
  }
  render() {
    console.log('Home 刷新')
    return (
      <div>
        <div>
          <div>{this.state.counter}</div>
          <button onClick={this.add}>Add</button>
        </div>
        <Header />
        <Footer />
      </div>
    )
  }

  add = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
// React.memo 在 props 改变是才会更新
const Header = React.memo((props) => {
  console.log('Header 刷新')
  return <div>Header</div>
})
// 只要 Home 重新渲染就会更新
const Footer = (props) => {
  console.log('Footer 刷新')
  return <div>Footer</div>
}

export default Home
