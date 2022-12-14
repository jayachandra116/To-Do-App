

const TodoItem = (props) => {
  let todo = props.todo;
  return (
    <button className="list-group-item list-group-item-action" key={props.id}>{todo}</button>
  );
};

export default TodoItem;
