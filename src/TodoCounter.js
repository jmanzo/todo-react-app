import styles from './TodoCounter.module.css';

function TodoCounter({ completed, total }) {
  return (
    <h1 className={styles.counterTitle}>Has completado {completed} de {total} TODOs</h1>
  );
}

export { TodoCounter };