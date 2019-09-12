import {todosRef} from '../firebase'

export const FETCH_TODOS ='FETCH_TODOS'
export const STATUS_DONE ='DONE'
export const STATUS_UNDERWAY ='UNDERWAY'

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo)
}

export const completeToDo = doneToDoId => async dispatch => {
  todosRef.child(doneToDoId).update({status:STATUS_DONE})
}

export const trashToDo = trashedToDoId => async dispatch => {
  todosRef.child(trashedToDoId).remove()
}

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    })
  })
}


