import styles from './Modal.module.css';
import { useState } from 'react';

function Modal({ setShowModal, setTodos }) {
    const [newTodo, setNewTodo] = useState('');

    return (
        <div className={styles.modal}>
        <div className={styles.modalContent}>
            <h1>New TODO</h1>
            <input 
                type="text" 
                placeholder="Write your task" 
                className={styles.input} 
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
            />
            <button 
                onClick={() => {
                    setShowModal(false); 
                    setTodos(todos => [...todos, {text: newTodo, completed: false}]);
                }} 
                className={styles.button}
            >
            Add
            </button>
        </div>
        </div>
    );
}

export { Modal };