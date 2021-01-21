//      (ノಠ益ಠ)ノ彡┻━┻
//    (ノಠ益ಠ)ノ彡┻━┻
//  (ノಠ益ಠ)ノ彡┻━┻
// dont for npm install!!!

import React, { useState } from 'react'
import Card from './components/Card/Card'

import './App.css';

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
 

  return (
    <div className="App">
      <div className="todoHeader">
        <h2>to-do list</h2>
      </div>
      <div className="cardComponent">
        <Card 
          tasks={tasks}
          removeHandler={removeHandler}
          />
      </div>
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
              <button >submit</button>
            </div>
        </form>
      </div>
    </div>
  );
  }





export default App;
