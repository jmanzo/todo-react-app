import styles from './TodoSearch.module.css';

function TodoSearch({ searchValue, setSearchValue, handleSearch }) {
  return <input 
    className={styles.searcher} 
    placeholder="Cortar cebolla"
    value={searchValue}
    onChange={(event) => {
      handleSearch(event.target.value);
    }}
  />;
}

export { TodoSearch };