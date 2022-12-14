import TodoList from "./components/todos/TodoList";
import { useState } from "react";

import TODOS from "./dummyToDos";
import NewToDoForm from "./components/NewToDoForm";

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";

function App() {
  const [todos, setToDos] = useState(TODOS);

  const addToDoHandler=(todo)=>{
    setToDos(prevToDos=>[todo,...prevToDos])
  }

  return (
    <Container>
      <Navbar/>
      <NewToDoForm onAdd={addToDoHandler}/>
      <TodoList todos={todos}/>
    </Container>
  );
}

export default App;
