import React, { Component } from 'react'

export default class addTask extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='mt-3'>
        <input value={this.props.text} onChange={(e) => this.props.changeValue(e.target.value)} className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
        <button onClick={this.props.addTask} type="button" className="btn btn-success mt-3">Add task</button>
      </div>
    )
  }
}
