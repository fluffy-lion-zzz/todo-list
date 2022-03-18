//      (ノಠ益ಠ)ノ彡┻━┻
//    (ノಠ益ಠ)ノ彡┻━┻
//  (ノಠ益ಠ)ノ彡┻━┻
// dont forget npm install!!!

import React, { useState } from "react";
import Card from "./components/Card/Card";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeHandler = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
  };
  return (
    <div className="App">
      <div className="todoHeader">
        <h2>to-do list</h2>
      </div>
      <>
        <Card tasks={tasks} removeHandler={removeHandler} />
      </>
      <div className="userInput">
        <form onSubmit={handleSubmit}>
          <input
            className="inputBox"
            type="text"
            value={input}
            placeholder="add new task"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></input>
          <div className="submitWrapper">
            <button className="submitButton">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
