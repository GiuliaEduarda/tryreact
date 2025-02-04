import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search'


import "./App.css";



function App() {
const [todos, setTodos] = useState([
   { id: 1,
    text: "criar funcionalidade X no sistema",
    category: "trabalho",
    isCompleted: false, },
    { id: 2,
      text: "ir para academia",
      category: "pessoal",
      isCompleted: false, },
      {
        id: 3,
        text: "Estudar react",
        category: "estudos",
        isCompleted: false, 
      }
]);

const [search, setSearch] = useState ("");

const addTodo = (text, category) => {
  const newTodos = [...todos, {
    id: Math.floor(Math.random() * 1000),
    text,
    category,
    isCompleted: false,
  }];

  setTodos(newTodos);
};

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
  setTodos(filteredTodos);

};
const completarTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
  setTodos(newTodos)
}

  return (
   <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className='todo-list'>
        {
          todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) =>(
            <Todo key={todo.id}  todo={todo} removeTodo={removeTodo} completarTodo={completarTodo} />
          ))
        }
      </div>
      <TodoForm addTodo={addTodo} />
   </div>
  )
}

export default App
