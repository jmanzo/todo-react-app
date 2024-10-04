import './CreateTodoButton.css';

function CreateTodoButton({ showModal, setShowModal }) {
  const onClickButton = () => {
    setShowModal(!showModal);
  };

  return (
    <button onClick={onClickButton}>+</button>
  );
}

export { CreateTodoButton };