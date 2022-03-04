import React, { useEffect } from 'react'
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleTodo } from '../redux/reducer/Actions';


export const Todo = ({ todo }) => {
  const Dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const hanldeChecked = ()=>Dispatch(ToggleTodo(todo.id))
 //useEffect sẽ được gọi sau khi render vì vạy việc để deps [todo] sẽ thay đổi true false
  useEffect(()=>{
    setChecked(todo.Completed)
  },[todo])

  return (
    <Box mg={1} bgColor='lightsalmon' p={2} mt='2'>
      <Checkbox  onChange={hanldeChecked}  colorScheme='teal' isChecked={checked}>
        <Text as={todo.completed && 'del'}>{todo.content}</Text>
        </Checkbox>

    </Box> 
  )
}
