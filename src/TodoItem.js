import styles from './TodoItem.module.css';

function TodoItem({ name, completed, handleComplete, handleDelete }) {
  return (
    <li className={`${styles.todoItem} ${completed ? styles.isCompleted : ''}`}>
        <span className={styles.checkTodoItem} onClick={handleComplete}></span>
        <span>{name} </span>
        <span className={styles.closeIcon} onClick={handleDelete}>X</span>
    </li>
  );
}

export { TodoItem };