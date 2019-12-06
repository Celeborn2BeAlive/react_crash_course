// import uuid from 'uuid' # not needed with json placeholder because it automatically add an id to items
import axios from 'axios'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    this.setState({
      todos: result.data
    })
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteItem = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/{id}`)
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  addTodo = async ({ title }) => {
    const result = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    this.setState({
      todos: [...this.state.todos, result.data]
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div >
      </Router>
    )
  }
}

export default App;