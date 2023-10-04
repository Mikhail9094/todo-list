import styles from "./todoList.module.scss";
import Item from "../Item/Item";
import { TodoContext } from "../../App";
import { useContext } from "react";
import styleApp from '../../App.module.scss'

type Props = {addClass:string}

function TodoList({addClass}: Props) {
  const { todos, onDelete, onChange } = useContext(TodoContext);
  return (
    <div className={`${styles.todoList } ${styleApp[addClass]}`}>
      {todos.length > 0 ? (
        todos.map((todo, i) => (
          <Item
            key={i}
            task={todo}
            onDelete={onDelete}
            onChange={onChange}
          />
        ))
      ) : (
        <div className={styles.text}>На сегодня дел нет!</div>
      )}
    </div>
  );
}

export default TodoList;
