import React, {Component} from 'react'
import {connect} from 'react-redux'
import {completeToDo} from  '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

class ListItem extends Component {

  handleComplete = todoId => {
    const {completeToDo} = this.props;
    completeToDo(todoId);
  };

  render() {
    const{ key, todoId, todo} = this.props;
    return (

      <tr  key={key}>
        <td>
          <button 
            class="button-error pure-button"
            type="button"
            onClick={() => this.handleComplete(todoId)}>
            <FontAwesomeIcon icon={faTrashAlt} />          
          </button> 
        </td>
        <td>{todo.title}</td>
        <td>
          <button 
            class="button-small button-success pure-button"
            onClick={() => this.handleComplete(todoId)}>
            <FontAwesomeIcon icon={faCheck} />
          </button> 
        </td>
      </tr>






    );
  }
}

export default connect(null, {completeToDo}) (ListItem)