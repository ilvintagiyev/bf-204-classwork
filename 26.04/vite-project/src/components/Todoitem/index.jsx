import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DeleteToDo from "./DeleteToDo";

function ToDoItem({ todo, setTodos }) {
  return (
    <li>
      <span>
        {todo.title}{" "}
        <i>{moment(todo.createdAt).format("MMM Do YYYY, h:mm a")}</i>
      </span>
      <DeleteToDo id={todo.id} setTodos={setTodos}/>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
  }),
  setTodos: PropTypes.func
};

export default ToDoItem;