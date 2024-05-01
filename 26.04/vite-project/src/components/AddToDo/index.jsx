import React from 'react'
import PropTypes from "prop-types"
import ToDoItem from 'ToDoItem';
import { useState } from 'react';

function AddToDo({todos, setTodos}) {
      const [inputValue, setInputValue] = useState("");
      const [error, setError] = useState(false);
  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      if (inputValue.trim() == "") {
            setError(true)
      } else {
            setTodos([...todos, new ToDoItem(inputValue)])
            setInputValue("")
            setError(false)
      }
    }}>
      <input type="text" placeholder='Add new Todo' value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
      }}/>
      <p style={{display: error ? "block" : "none", color: "red"}}>İnput is Required</p>
      <button type='submit' onSubmit={(e) => {
            
      }}>Add</button>
    </form>
  )
}

AddToDo.propTypes = {
      todos: PropTypes.array,
      setTodos: PropTypes.func
}

export default AddToDo