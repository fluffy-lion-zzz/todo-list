import React from 'react'
import './Todo.css'
import { useState } from 'react'

const Todo = (props) => {
  const [done, setDone] = useState(true)
  const removeComb = (index) => {
    props.removeHandler(index)
  }
  const checked = () => {
    setDone(false)
  }
    return (
        <div className="taskWrapper">
          <div className="taskDisplay">
            {done ? <p>{props.task}</p> : <p style={{ color: "red" }}>{props.task}</p>}
          </div>
          <div className="buttonWrapper">
              <button onClick={() => removeComb(props.index)}>delete</button>
              <button onClick={checked}>done</button>
          </div>
        </div>
    )
  }

export default Todo