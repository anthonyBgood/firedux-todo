import {todosRef} from '../firebase'
const FETCH_TODOS ='FETCH_TODOS'

export const addToDo = newToDo => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    })
  })
}