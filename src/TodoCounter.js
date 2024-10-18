import styles from './TodoCounter.module.css';

function TodoCounter({ completed, total }) {
  return (
    <h1 className={styles.counterTitle}>You have completed {completed} of {total} TODOs</h1>
  );
}

export { TodoCounter };