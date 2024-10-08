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

  const handleComplete = (text) => {
    setTodos(todos => todos.map(todo => todo.text === text ? {...todo, completed: !todo.completed} : todo));
  }

  const handleDelete = (text) => {
    setTodos(todos => todos.filter(todo => todo.text !== text));
  }

  const handleSearch = (text) => {
    setSearchValue(text);
  }

  return (
    <div className="app">
      <TodoCounter 
        completed={todos.filter(todo => todo.completed).length} 
        total={todos.length} 
      />

      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        handleSearch={handleSearch}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
            key={todo.text} 
            name={todo.text} 
            completed={todo.completed}
            handleComplete={() => handleComplete(todo.text)}
            handleDelete={() => handleDelete(todo.text)}
          />
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
