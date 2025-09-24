import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import type { todoType } from "./types/todo.model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<todoType[]>([]);
  const todoAddHadler = (comingtext: string) => {
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: crypto.randomUUID(), text: comingtext },
    ]);
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Todo App</h1>
      <NewTodo onAddTodo={todoAddHadler} />
      <TodoList items={todo} />
    </div>
  );
};

export default App;
