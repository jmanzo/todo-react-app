import { useState, useEffect } from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import PartyPopper from './PartyPopper'; 
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState(localStorage.getItem('todos_v1') ? JSON.parse(localStorage.getItem('todos_v1')) : []);
  const [ searchValue, setSearchValue ] = useState('');

  const searchedTodos = todos.filter(todo => {
    const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const todoText = normalizeText(todo.text);
    const searchText = normalizeText(searchValue);

    return todoText.includes(searchText);
  });
  const allCompleted = todos.every(todo => todo.completed); // Check if all todos are completed

  const handleComplete = (text) => {
    setTodos(todos => todos.map(todo => todo.text === text ? {...todo, completed: !todo.completed} : todo));
  }

  const handleDelete = (text) => {
    setTodos(todos => todos.filter(todo => todo.text !== text));
  }

  const handleSearch = (text) => {
    setSearchValue(text);
  }

  useEffect(() => {
    localStorage.setItem('todos_v1', JSON.stringify(todos));
  }, [todos]);

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

      {(allCompleted && todos.length > 0) && <PartyPopper />} {/* Render PartyPopper if all todos are completed */}

      <CreateTodoButton showModal={showModal} setShowModal={setShowModal} />
      
      {showModal && (
        <Modal setShowModal={setShowModal} setTodos={setTodos} />
      )}
    </div>
  );
}

export default App;
