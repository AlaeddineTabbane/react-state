import React, { Component } from 'react'
import TodoList from './components/todoList'
import AddTask from './components/addTask'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todolist: [],
      text: ''
    }
    this.addTask = this.addTask.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addTask() {
    console.log('addTask');
    const list = [...this.state.todolist]
    list.push(this.state.text)
    this.setState({ todolist: list, text: '' })
  }

  deleteTask(id) {
    const list = this.state.todolist.filter((value, index) => index !== id)
    // const list1 = this.state.todolist.splice(id, 1)
    this.setState({ todolist: list })
  }

  changeValue(value) {
    console.log(value);
    this.setState({ text: value })
  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-8 col-sm-10'>
            <h1 className='text-center'>Todo list</h1>
            <TodoList list={this.state.todolist} deleteTask={this.deleteTask} />
            <AddTask text={this.state.text} addTask={this.addTask} changeValue={this.changeValue} />
          </div>
        </div>
      </div>
    )
  }
}
