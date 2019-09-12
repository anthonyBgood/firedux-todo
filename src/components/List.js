import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { STATUS_UNDERWAY } from '../actions'



class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  componentDidMount() {
    this.props.fetchToDos();
  }

  inputChange = e => {
    const text = e.target.value 
    this.setState(() => ({formValue: text}))

  };

  formSubmit = e => {
    
    e.preventDefault();
    
    const {formValue} = this.state;
    const {addToDo} = this.props;
    
    // TODO: don't submit blank, add a notification
    if (formValue){
      addToDo({
        title: formValue, 
        timestamp: Date.now(), 
        status: STATUS_UNDERWAY, 
      })

      this.setState({formValue: ""});
    }

  };

  renderForm = () => {
    const {showForm, formValue } = this.state;
    
      return ( 


          <div>
            <form class="pure-form" onSubmit={this.formSubmit}>
              <fieldset>
                <input 
                  class="add-form"
                  onChange={this.inputChange}
                  id="toDoNext"
                  type="text"
                  placeholder="add a new whatever"
                  value ={formValue}
                />

                <button type="submit" class="pure-button pure-button-primary">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </fieldset>
              
            </form>
          </div> 

      );
  };


  renderToDo() {
    const {data} = this.props

    const toDos = 
    _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />
    })

    if (!_.isEmpty(toDos)) {
      return (
        
        <table class="pure-table pure-table-horizontal">
          {toDos}
        </table>
      )
    }
      return (
        <div>
          <p>You have no ToDos</p>
        </div>
      )
  }

  
  render() {
    const {showForm} = this.state;
    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
      </div>




    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);