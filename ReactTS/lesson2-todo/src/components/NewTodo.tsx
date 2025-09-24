import type React from "react";
import { useRef } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";

interface addTodoType {
  onAddTodo: (comingdata: string) => void;
}

const NewTodo: React.FC<addTodoType> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      Swal.fire({
        title: "Please,fill input",
        icon: "warning",
      });
    } else {
      onAddTodo(inputRef.current?.value);
      inputRef.current.value = "";
    }
  };
  return (
    <Col md="4">
      <Form onSubmit={addTodo}>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Enter new to do" ref={inputRef} />
          <Button variant="warning" type="submit" id="button-addon2">
            Add
          </Button>
        </InputGroup>
      </Form>
    </Col>
  );
};

export default NewTodo;
