import styles from './TodoList.module.css';

function TodoList(props) {
  return (
    <ul className={styles.todoList}>
      {props.children}
    </ul>
  );
}

export { TodoList };