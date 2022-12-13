import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";

import TodoList from "./components/todos/TodoList";
import { useState } from "react";

import TODOS from "./dummyToDos";
import NewToDoForm from "./components/NewToDoForm";

function App() {
  const [todos, setToDos] = useState(TODOS);

  const addToDoHandler=(todo)=>{
    setToDos(prevToDos=>[todo,...prevToDos])
  }

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">To-Do App</Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        <NewToDoForm onAdd={addToDoHandler}/>
      </Row>
      <Row>
        <h2>To Dos:</h2>
        {todos && todos.length > 1 ? (
          <TodoList todos={todos} />
        ) : (
          <p>No todos here</p>
        )}
      </Row>
    </Container>
  );
}

export default App;
