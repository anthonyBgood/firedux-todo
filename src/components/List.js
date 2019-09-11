import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = e => {
    const text = e.target.value 
    this.setState(() => ({formValue: text}))

  };

  formSubmit = e => {
    
    e.preventDefault();
    
    const {formValue} = this.state;
    const {addToDo} = this.props;
    
    addToDo({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <i>add</i>
              <input 
                
                onChange={this.inputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">What Next?</label>
            </div>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      );
    }
  };


  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  }

//  componentWillMount() {
//    this.props.fetchToDos();
//  }

  componentDidMount() {
    this.props.fetchToDos();
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div>
          <button onClick={() => this.setState({showForm: !showForm})}>
          {showForm ? (
            <i>Close</i>
          ) : (
            <i>Add</i>
          )}
          </button>
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