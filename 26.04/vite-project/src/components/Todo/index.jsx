import React from "react";
import AddToDo from "./AddToDo";
import SearchToDo from "./SearchToDo";
import ToDoItem from "./ToDoItem";
import { useState } from "react";
import ToDoList from "./ToDoList";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTodos = todos.filter((q) => {
    return q.title
      .trim()
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <>
      <h2>ToDo React App</h2>
      <AddToDo todos={todos} setTodos={setTodos}/>
      <hr />
      <SearchToDo />
      <h3>ToDo List</h3>
      <ToDoList>
            {filteredTodos && filteredTodos.map((todo) => {
                  return <ToDoItem key={todo.id} todo={todo} setTodos={setTodos}/>
            })}
      </ToDoList>
    </>
  );
}

export default ToDo;