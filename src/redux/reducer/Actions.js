import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './ActionTypes'

let NextIdTodo = 0 ;
export const addTodo = content =>({
    type:ADD_TODO,
    payload:{
        id: ++NextIdTodo,
        content
    }   
})

export const ToggleTodo = id =>({
    type:TOGGLE_TODO ,
    payload:{
        id,
    }
})
export const SetFilter = filter =>({
    type:SET_FILTER,
    payload:{filter}
})