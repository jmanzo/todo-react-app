import styles from './TodoItem.module.css';

function TodoItem({ todo: { text, completed }, setTodos }) {
  return (
    <li className={`${styles.todoItem} ${completed ? styles.isCompleted : ''}`}>
        <span className={styles.checkTodoItem} onClick={() => setTodos(todos => todos.map(todo => todo.text === text ? {...todo, completed: !todo.completed} : todo))}></span>
        <span>{text} </span>
        <span className={styles.closeIcon} onClick={() => setTodos(todos => todos.filter(todo => todo.text !== text))}>X</span>
    </li>
  );
}

export { TodoItem };