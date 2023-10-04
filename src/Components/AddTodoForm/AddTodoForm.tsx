import Button from "../Button/Button";
import styles from "./addTodoForm.module.scss";
import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../../App";

function AddTodoForm() {
  const [text, setText] = useState("");
  const { onAdd } = useContext(TodoContext);

  const onAddClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (text !== "") {
      onAdd({
        id: nanoid(),
        name: text,
        completed: false,
      });
    }
    setText("");
  };

  return (
    <form>
      <input
        id="inputForm"
        value={text}
        className={styles.input}
        placeholder=" Добавить новое дело"
        autoComplete="off"
        onChange={(e) => setText(e.target.value)}
      />
      <Button addClass="buttonPlus" onClick={onAddClick} disabled={false} />
    </form>
  );
}

export default AddTodoForm;
