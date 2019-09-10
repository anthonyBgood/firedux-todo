import React from 'react'
import {connect} from 'react-redux'
import {completeTodo} from  '../actions'

class ListItem extends Component {
  
  handleComplete = completeToDo => {
    const {completeToDo} = this.props
    completeTodo(completeToDo)
  }

  render() {
    const{todoId, todo} = this.props
    return (
      <div key="todoName">
        <h4>

          {todo.title}
          <span onClick={() => this.handleComplete(todoId)}>
            <i>Done</i>
          </span>

        </h4>
      </div>

    )
  }
}

export default connect(null, {completeTodo}) (ListItem)