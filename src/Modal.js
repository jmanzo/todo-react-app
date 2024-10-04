import styles from './Modal.module.css';
import { useState } from 'react';

function Modal({ setShowModal, setTodos }) {
    const [newTodo, setNewTodo] = useState('');

    return (
        <div className={styles.modal}>
        <div className={styles.modalContent}>
            <h1>Nuevo TODO</h1>
            <input 
                type="text" 
                placeholder="Escribe tu nuevo TODO" 
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
            Agregar
            </button>
        </div>
        </div>
    );
}

export { Modal };