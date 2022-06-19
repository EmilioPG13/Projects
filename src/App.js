import './App.css';
import React, { useState, useEffect } from 'react';
//Components
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState ([])
  const [status, SetStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //USE EFFECT
  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
        default:
          setFilteredTodos(todos)
          break
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Lista de tareas</h1>
      </header>
      <Form 
      inputText = {inputText} 
      todos= {todos} 
      setTodos = {setTodos} 
      setInputText={setInputText} 
      SetStatus={SetStatus}
      />
      <TodoList   
      filteredTodos={filteredTodos} 
      setTodos={setTodos} 
      todos = {todos} />
    </div>
  );
}

export default App;
