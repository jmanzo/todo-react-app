import './TodoItem.css';

function TodoItem({ todo: { text, completed } }) {
  return (
    <li className={'todo-item' + (completed ? ' completed' : '')}>
        <span className="check-todo-item"></span>
        <span>{text} </span>
        <span className="close-icon">X</span>
    </li>
  );
}

export { TodoItem };