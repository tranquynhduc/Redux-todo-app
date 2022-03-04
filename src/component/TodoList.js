import { Box } from '@chakra-ui/react'
import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';
import { getTodoByVisibilityFilter } from './../redux/reducer/Selector';


export const TodoList = () => {
  const { todos ,visibilityFilter } = useSelector(state => state)
  const filterTodos=getTodoByVisibilityFilter(todos,visibilityFilter)

  return (
    <Box>
      {filterTodos.length ? filterTodos.map(todo=>( <Todo key={`todo-${todo.id}`} todo={todo}/>)) 
      : <Box textAlign='center' my='4'>No Todo List!</Box>}
     
    </Box>

  )
}
