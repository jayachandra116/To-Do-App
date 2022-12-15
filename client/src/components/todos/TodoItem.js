import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({
    title: "",
  });

  let todo = props.todo;

  const doneClickHandler = (id) => {
    dispatch({ type: "DONETODO", payload: id });
  };

  const deleteClickHandler=(id)=>{
    dispatch({ type: "REMOVETODO", payload: id });
  }

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onInputChangeHandler = (e) => {
    let { name, value } = e.target;
    setInput((p) => {
      return {
        [name]: value,
      };
    });
  };

  const itemEditContainer = (
    <form >
    <input
      className="mb-auto"
      type="text"
      placeholder={todo.title}
      onChange={onInputChangeHandler}
      value={input.title}
      name="title"
      id="NewToDoTitle"
      style={{"borderTop":0,"borderLeft":0,"borderRight":0,}}
    />
    </form>
  );

  const updateToDoHandler = (id) => {
    dispatch({
      type: "UPDATETODO",
      payload: {
        id: id,
        title: input.title,
        complete: false,
      },
    });
    setInput({title:""})
    setIsEditing(false)
  };

  return (
    <div
      className="list-group-item list-group-item-action"
      key={todo.id}
      title={todo.title}
    >
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              {isEditing && itemEditContainer}
              {!isEditing && <b>{todo.complete===true?<del>{todo.title}</del>:todo.title}</b>}
            </div>
            <div className="col">
              {isEditing && (
                <button className="btn" title="Update todo" onClick={() => updateToDoHandler(todo.id)}>
                  <span className="material-icons">upgrade</span>
                </button>
                )
              }
            </div>
          </div>
        </div>
        <div className="col">
          <button onClick={() => {doneClickHandler(todo.id)}} className="btn ml-1 mr-1" title="Mark as done?" disabled={isEditing}>
            {/* mark a todo as complete */}
            <span className="material-icons">task_alt</span>
          </button>
          <button onClick={toggleEditing} className="btn ml-1 mr-1" title="Edit todo?" disabled={todo.complete}>
            {/* Edit a todo */}
            <span className="material-icons">edit_note</span>
          </button>
          <button onClick={() => {deleteClickHandler(todo.id)}} className="btn ml-1 mr-1" title="delete todo?" disabled={isEditing}>
            {/* Delete a todo */}
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
