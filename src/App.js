import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state ={
    tasks: ["task 1", "task 2"],
    input:''
  }
  addTask = (event) => {
    this.setState({ input: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      tasks: [...this.state.tasks, this.state.input]
    })
  }

 removeHandler = index => {
   let storedTasks = [...this.state.tasks]
   storedTasks.splice(index, 1)
   this.setState({ tasks: storedTasks})
 }

  render() {
  return (
    <div className="App">
     <h2>add task</h2>
     <Card 
      removeHandler={this.removeHandler}
      tasks={this.state.tasks}
      />
     <div>
       <form onSubmit={this.handleSubmit}>
         <input 
          type="text" 
          onChange={this.addTask}
          value={this.state.input}
          >
          </input>
         <p>{this.state.input}</p>
         <button >submit</button>
       </form>
     </div>
    </div>
  );
  }
}

const Card = (props) => {
  const todoList = props.tasks.map((todo, index) => {
    return <Todo  content={todo} index={index} delete={props.removeHandler} />
  })
  return (
    <div>
      {todoList}
    </div>
  )
}
const Todo = (props) => {
  return(
    <div>
      <p>
      {props.content}
      </p>
      <p>
        {props.index}
      </p>
      <button onClick={() => {props.delete(props.index)}}>delete?</button>
    </div>
  )
}


export default App;
