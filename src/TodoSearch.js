import styles from './TodoSearch.module.css';

function TodoSearch({ searchValue, handleSearch }) {
  return <input 
    className={styles.searcher} 
    placeholder="Search your task"
    value={searchValue}
    onChange={(event) => {
      handleSearch(event.target.value);
    }}
  />;
}

export { TodoSearch };