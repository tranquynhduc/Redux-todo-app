import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './../redux/reducer/Actions';

export const AddTodo = () => {
  const [value, setValue] = useState('')
  const Dispatch =useDispatch();
  const handleInput = e => {
    setValue(e.target.value)
  }
  const hanldeSubmit = e => {
    e.preventDefault();
    Dispatch(addTodo(value))
    setValue('')
  }
  return (
    <form onSubmit={hanldeSubmit}>
      <Flex>
        <FormControl>
          <Input
            placeholder='Enter your list'
            type='text'
            onChange={handleInput}
            value={value}
          />
        </FormControl>
        <Button
          colorScheme='telegram'
          disabled={!value}
          type='submit'
        >
          Add Todo
        </Button>
      </Flex>


    </form>
  )
}
