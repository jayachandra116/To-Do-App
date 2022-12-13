import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import ListGroup from "react-bootstrap/ListGroup";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  let todos = props.todos;

  return (
    <Container>
      <Row>
        <ListGroup as="ul">
          <ul>
            {todos.map((todo) => (
              <TodoItem toDO={todo} key={todo} />
            ))}
          </ul>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default TodoList;
