import { useState } from 'react'

import Todo from './componetes/Todo';
import TodoForm from './componetes/TodoForm';

import './App.css';


function App() {
  const [todos, setTodos] = useState([
     {
      id:1,
      text:"Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
     },

     {
      id:2,
      text:"Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
     },

     {
      id:3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted: false,
     },
  ])
  
   return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
    <TodoForm />
   </div>;
  
}

export default App
