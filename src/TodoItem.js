import styles from './TodoItem.module.css';

function TodoItem({ todo: { text, completed } }) {
  return (
    <li className={`${styles.todoItem} ${completed ? styles.isCompleted : ''}`}>
        <span className={styles.checkTodoItem}></span>
        <span>{text} </span>
        <span className={styles.closeIcon}>X</span>
    </li>
  );
}

export { TodoItem };