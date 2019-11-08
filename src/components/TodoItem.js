import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { title, id } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={() => {
              this.props.markComplete(id)
            }}

            checked={this.props.todo.completed ? true : false} /> {' '}
          {title}
          <button
            style={btnStyle}
            onClick={() => {
              this.props.deleteItem(id)
            }}>
            <img src={btnIcon} style={btnIconStyle} alt='x' />
          </button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  float: 'right',
  userSelect: 'none'
}

const btnIconStyle = {
  width: '1.5em'
}

const btnIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDOTM2MzY7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjY0IiBjeT0iNjQiIHI9IjY0Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEwMC4zLDkwLjRMNzMuOSw2NGwyNi4zLTI2LjRjMC40LTAuNCwwLjQtMSwwLTEuNGwtOC41LTguNWMtMC40LTAuNC0xLTAuNC0xLjQsMEw2NCw1NC4xTDM3LjcsMjcuOCAgYy0wLjQtMC40LTEtMC40LTEuNCwwbC04LjUsOC41Yy0wLjQsMC40LTAuNCwxLDAsMS40TDU0LDY0TDI3LjcsOTAuM2MtMC40LDAuNC0wLjQsMSwwLDEuNGw4LjUsOC41YzAuNCwwLjQsMS4xLDAuNCwxLjQsMEw2NCw3My45ICBsMjYuMywyNi4zYzAuNCwwLjQsMS4xLDAuNCwxLjUsMC4xbDguNS04LjVDMTAwLjcsOTEuNCwxMDAuNyw5MC44LDEwMC4zLDkwLjR6Ii8+PC9zdmc+"

export default TodoItem
