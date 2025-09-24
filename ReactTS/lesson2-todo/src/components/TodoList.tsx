import { Button, ListGroup } from "react-bootstrap";
import type { todoType } from "../types/todo.model";

interface todoListProps {
  items: todoType[];
}

const TodoList: React.FC<todoListProps> = ({ items }) => {
  return (
    <ListGroup className="col-md-4">
      {items.length === 0 ? (
        <p className="alert alert-warning text-center">
          You have not todo yet!
        </p>
      ) : (
        items.map((item: todoType, index: number) => (
          <ListGroup.Item
            key={index}
            className="d-flex align-items-center justify-content-between"
          >
            {item.text} <Button variant="danger">X</Button>
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
};

export default TodoList;
