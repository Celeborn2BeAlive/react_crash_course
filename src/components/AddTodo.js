import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (e) => {
    e.preventDefault()
    if (this.state.title !== '') {
      this.props.addTodo(this.state)
      this.setState({ title: '' })
    }
  }

  render() {
    return (
      <form
        style={{ display: 'flex' }}
        onSubmit={this.onSubmit}>
        <input
          type='text'
          className='input'
          name='title'
          placeholder='Add Todo...'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
          action='none'
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
