function TodoItem({ todo: { text, completed } }) {
  return (
    <li>
        <span>{completed ? '(x) ' : '( ) '}</span>
        <span>{text} </span>
        <span>X</span>
    </li>
  );
}

export { TodoItem };