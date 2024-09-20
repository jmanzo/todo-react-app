import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

const todos = [
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
];

function App() {
  return (
    <div className="app">
      <TodoCounter 
        completed={todos.filter(todo => todo.completed).length} 
        total={todos.length} 
      />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
