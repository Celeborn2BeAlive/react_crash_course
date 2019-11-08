import React, { Component } from 'react';
import TodoItem from './TodoItem'

import PropTypes from 'prop-types';

class Todos extends Component {
  render = () => this.props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={this.props.markComplete}
      deleteItem={this.props.deleteItem}
    />
  ))
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;