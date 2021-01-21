import React from 'react'
import './Todo.css'
const Todo = (props) => {
    return (
      <div className="taskWrapper">
        <div className="taskDisplay">
            <p>{props.task}</p>
        </div>
        <div className="buttonWrapper">
            <button onClick={() => props.removeHandler(props.index)}>delete</button>
        </div>
      </div>
    )
  }

export default Todo