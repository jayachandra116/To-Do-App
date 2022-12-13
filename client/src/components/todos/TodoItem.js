import ListGroup from "react-bootstrap/ListGroup";

const TodoItem = (props) => {
  let todo = props.toDO;
  return (
    <ListGroup.Item action key={todo}>
      {todo}
    </ListGroup.Item>
  );
};

export default TodoItem;
