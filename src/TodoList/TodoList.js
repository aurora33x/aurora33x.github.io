import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem' 
import './TodoList.scss';
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }

  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClickAdd = () => {
    if (this.state.inputValue === '') {
      console.log('Input error')
      return 0
    }
    this.setState({
      list: [...this.state.list,{
        name:this.state.inputValue,
        isEnd:0
      }],
      inputValue:''
    })
    

  }

  handleDelete = (index,id) => { 
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  handleIsEnd = (index,id) => { // isEnd
    console.log(id)
    let list = [...this.state.list]
    list = list.map((item,itemIndex) => {
      if (itemIndex === index) {
        console.log(item.name)
        item.complete = item.complete === 1 ? 0 : 1
        console.log(item)
      }
      return item
    })
    this.setState({
      list
    })
  }
  getTodoItem() { 
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          deleteItem={this.handleDelete}
          handleIsEnd={this.handleIsEnd}
          key={index}
          id = {item.id}
          content={item.name}
          isEnd={item.complete === 1? true:false}
          index={index}
        />
      )
    })
  }
  
  render() {
      let EndNum = this.state.list.filter(item => item.complete === 1)
      console.log(this.state.list)
      return (
        <Fragment>
          <div className='container ContentBox'>
            <section className="hero is-primary">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    TodoList
                  </h1>
                </div>
              </div>
            </section>
            <div className="notification action">
              <input
                type="text"
                className="input is-primary"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
              />
              <button className="button is-primary" onClick={this.handleClickAdd}>add</button>
            </div>
            <ul className="notification list">{this.getTodoItem()}</ul>
            <footer className="footer">
              <p>Have:{this.state.list.length} things</p>
              <p>Finished:{EndNum.length}</p>
              <p>Unfinished:{this.state.list.length - EndNum.length}</p>
              <div>Networking connection:<span id="network-status">Online</span></div>
            </footer>
          </div>
        </Fragment>
      )
  }
}
export default TodoList