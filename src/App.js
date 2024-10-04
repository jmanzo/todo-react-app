import { useState } from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([
    {
      text: 'Pagos pendientes',
      completed: true,
    },
    {
      text: 'Proyecto #1',
      completed: true,
    },
    {
      text: 'Proyecto #2',
      completed: false,
    },
    {
      text: 'Reunión con el equipo',
      completed: true,
    },
  ]);

  return (
    <div className="app">
      <TodoCounter 
        completed={todos.filter(todo => todo.completed).length} 
        total={todos.length} 
      />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} setTodos={setTodos} />
        ))}
      </TodoList>

      <CreateTodoButton showModal={showModal} setShowModal={setShowModal} />
      
      {showModal && (
        <Modal setShowModal={setShowModal} setTodos={setTodos} />
      )}
    </div>
  );
}

export default App;
