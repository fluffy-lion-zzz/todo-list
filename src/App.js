//      (ノಠ益ಠ)ノ彡┻━┻
//    (ノಠ益ಠ)ノ彡┻━┻
//  (ノಠ益ಠ)ノ彡┻━┻
// dont for npm install!!!


///anime js!!!!!!!

import React, { useState } from 'react'
import Card from './components/Card/Card'

import './App.css';
import anime from 'animejs'
import Anime from 'react-anime'

const App = () => {
const [tasks, setTasks] = useState(["task1", "task2"])
const [input, setInput] = useState("")

 const handleSubmit = (event) => {
    event.preventDefault()
    setTasks([...tasks, input])
    setInput("")
    console.log(tasks)
  }

 const removeHandler = index => {
   console.log(index)
   let storedTasks = [...tasks]
   storedTasks.splice(index, 1)
   console.log(storedTasks)
   setTasks(storedTasks)

 }
 let animate =()=>{ 
  //  anime({
  // targets: '.taskWrapper',
  // translateX: 250,
  // easing: 'easeInOutSine'
  // })
  anime({
    targets:'.submitButton',
    keyframes: [
      // {translateY: 0},
      {translateX: 250},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 2000,
    easing: 'easeOutElastic(1, .8)',
    // backgroundColor: [
    //   {value: '#FFF'}, // Or #FFFFFF
    //   {value: 'CCFFCC'},
    //   {value: 'E5FFCC'}
    // ],
  })
}
 

  return (
    <div className="App">
      <div className="todoHeader">
        <h2>to-do list</h2>
      </div>
      <>
        
          <Card 
            tasks={tasks}
            removeHandler={removeHandler}
            animate={animate}
            />
        
      </>
      <div className="userInput">
        <form onSubmit={handleSubmit}>
          <input 
            className="inputBox"
            type="text" 
            value={input}
            onChange={(event) => {
              setInput(event.target.value)
            }}
            >
            </input>
            {/* <div>
              <p>{input}</p>
            </div> */}
            <div className="submitWrapper">
              <button className="submitButton"onClick={animate}>submit</button>
            </div>
        </form>
      </div>
    </div>
  );
  }





export default App;
