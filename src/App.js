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
     <h2>add task</h2>
     <Card 
      tasks={tasks}
      removeHandler={removeHandler}
      />
     <div>
       <form onSubmit={handleSubmit}>
         <input 
          type="text" 
          value={input}
          onChange={(event) => {
            setInput(event.target.value)
          }}
          >
          </input>
         <p>{input}</p>
         <button >submit</button>
       </form>
     </div>
    </div>
  );
  }





export default App;
