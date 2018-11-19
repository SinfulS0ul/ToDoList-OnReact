import React, { Component } from 'react';
import './App.css';
import ToDoList from '../ToDoList'
import Tasks from '../Tasks';

class App extends Component {
  
  state = {
    tasks: [],
    taskText: { text: '', date: '', done: false },
    doneTasks: false,
    undoneTasks: false
  }

  textInput = React.createRef();
  doneTasks = React.createRef();

  addTask = e => {
    e.preventDefault();
    const newTask = this.state.taskText;
    if(newTask.text !== ''){
      this.setState({tasks: [...this.state.tasks, newTask],
                     taskText: {text: '', date: '', done: false}});
    }
  }

  deleteTask = key => {
    const newTasks = this.state.tasks
      .filter(task => task.date !== key);
    this.setState({tasks: newTasks});
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : { text: target.value, date: Date.now(), done: false };
    const name = target.name;
    this.setState({
        [name]: value
    });
  }

  checkLikeDone = key => {
    const newTasks = this.state.tasks
      .map(task => task.date !== key? task : {text: task.text, date: task.date, done: true});
    this.setState({tasks: newTasks});
    console.log(newTasks)
  }

  render() {
    return (
      <div className="App">
        <ToDoList 
          addTask={this.addTask} 
          textInput={this.textInput}
          handleInputChange={this.handleInputChange}
        />
        <Tasks 
          entries={this.state.tasks} 
          doneTasks={this.state.doneTasks}
          undoneTasks={this.state.undoneTasks}
          deleteTask={this.deleteTask}
          checkLikeDone={this.checkLikeDone}
        />
      </div>
    );
  }
}

export default App;