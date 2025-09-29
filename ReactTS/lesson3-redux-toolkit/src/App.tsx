import type React from "react";
import { Button, Col, Form, InputGroup, ListGroup } from "react-bootstrap";
import type { todoType } from "./types/todos.model";
import { useRef } from "react";
import { add } from "./slices/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const todos = useAppSelector((p: any) => p.todo);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const todoSubmited = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add(inputRef.current?.value));
    inputRef.current.value = "";
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-center my-5">Todo App</h1>
      <Col md={5}>
        <form onSubmit={todoSubmited}>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Enter todo" ref={inputRef} />
            <Button type="submit" variant="warning" id="button-addon2">
              Add
            </Button>
          </InputGroup>
        </form>
        <ListGroup>
          {todos.map((item: todoType, index: number) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {item.text}
              <Button variant="danger">X</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </div>
  );
};

export default App;
