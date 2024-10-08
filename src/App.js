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
  const [ searchValue, setSearchValue ] = useState('');
  const searchedTodos = todos.filter(todo => {
    const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const todoText = normalizeText(todo.text);
    const searchText = normalizeText(searchValue);

    return todoText.includes(searchText);
  });

  return (
    <div className="app">
      <TodoCounter 
        completed={todos.filter(todo => todo.completed).length} 
        total={todos.length} 
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
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
