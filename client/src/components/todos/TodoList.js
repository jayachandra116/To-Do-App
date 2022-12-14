

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  let todos = props.todos;

  return (
    <div className="container m-2">
          <ul className="list-group">
            {todos.map(todo=>(
              <TodoItem todo={todo} key={todo}/>
            ))}
          </ul>
    </div>
  );
};

export default TodoList;
