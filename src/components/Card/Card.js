import React from 'react'
import Todo from '../Todo/Todo'

import './Card.css'
const Card = (props) => {
    const taskList = props.tasks.map((task, index) => {
      return <Todo task={task} key={index} index={index} removeHandler={props.removeHandler} />
      
    })
  return (
    <div>
      {props.tasks && taskList}
    </div>
  )
  }

export default Card