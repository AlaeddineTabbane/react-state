import React, { Component } from 'react'

export default class todoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.list.map((item, index) => (
          <li className="list-group-item" key={index}>{item} <button onClick={() => this.props.deleteTask(index)}>delete</button> </li>
        ))}
      </ul>
    )
  }
}
