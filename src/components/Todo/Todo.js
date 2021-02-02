import React from 'react'
import './Todo.css'
import anime from 'animejs'
import Anime from 'react-anime'

const Todo = (props) => {
  // let animate = anime({
  //   targets: '.taskList',
  //   translateX: 250,
  //   easing: 'easeInOutSine'
  //   })
const removeComb = (index) => {
  // props.animate()
  props.removeHandler(index)
}

    return (
      // <Anime>
        <div className="taskWrapper">
          <div className="taskDisplay">
              <p>{props.task}</p>
          </div>
          <div className="buttonWrapper">
              <button onClick={
                // () => props.removeHandler(props.index)
                () => removeComb(props.index)
                }
                >delete</button>
          </div>
        </div>
      // </Anime>
    )
  }

export default Todo