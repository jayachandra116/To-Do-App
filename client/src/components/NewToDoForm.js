import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewToDoForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
  });
  const onUserInputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: value,
      };
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.table(userInput);
    props.onAdd(userInput.title)
  };

  return (
    <div className="mt-3 mb-3">
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="m-2">
          <Form.Control
            as="input"
            type="text"
            name="title"
            id="todo_title"
            placeholder="Create a todo here"
            value={userInput.title}
            onChange={onUserInputChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Button type="submit" variant="primary">
            Create
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewToDoForm;
