import styles from './TodoSearch.module.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return <input 
    className={styles.searcher} 
    placeholder="Cortar cebolla"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
  />;
}

export { TodoSearch };