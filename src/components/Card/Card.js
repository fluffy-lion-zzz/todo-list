import React from 'react'
import Todo from '../Todo/Todo'
// import anime from 'animejs'
import Anime from 'react-anime'


import './Card.css'
const Card = (props) => {


    const taskList = props.tasks.map((task, index) => {
      return <Todo animate={props.animate} task={task} key={index} index={index} removeHandler={props.removeHandler} />
      
    })
  return (
    <Anime>
      <div  className="taskList">
        {props.tasks && taskList}
      </div>
    </Anime>
  )
  }

export default Card