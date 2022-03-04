import { Container, Heading } from '@chakra-ui/react'
import { AddTodo } from './component/AddTodo';
import { TodoList } from './component/TodoList';
import VisibilityFilter from './component/VisibilityFilter';


function App() {
  return (
    <Container maxW='container.sm' >
      <Heading mb='5'>List Todo</Heading>
      <AddTodo />
      <TodoList/>
      <VisibilityFilter/>
    </Container>
  );
}

export default App;
