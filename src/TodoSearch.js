import styles from './TodoSearch.module.css';

function TodoSearch() {
  return <input className={styles.searcher} placeholder="Cortar cebolla" />;
}

export { TodoSearch };