import styles from "./item.module.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { PropsItem } from "./types";
import { MainParameters } from "../types";
import { changePosts } from "../api/requests";

function Item({ task, onDelete, onChange }: PropsItem<MainParameters>) {
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const onItemDelete = (id: string) => {
    onDelete(id);
  };

  return (
    <div
      className={styles.elementList}
      onMouseOver={() => setDeleteButtonVisible(true)}
      onMouseLeave={() => setDeleteButtonVisible(false)}
    >
      <div className={styles.textElement}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={() => onChange({ ...task, completed: !task.completed })}
        />
        {!editItem ? (
          <span className={styles.span}>{task.name}</span>
        ) : (
          <textarea
            className={styles.textArea}
            value={task.name}
            style={
              task.completed ? { textDecoration: "line-through" } : { textDecoration: undefined }
            }
            onChange={(e) => onChange({ ...task, name: e.target.value })}
          />
        )}
      </div>

      <div className={styles.listButtonСhange}>
        {deleteButtonVisible && (
          <>
            <Button
              addClass="buttonEdit"
              disabled={false}
              onClick={()=> setEditItem((prev) => !prev)}
            />
            <Button
              addClass={task.completed ? "buttonDelete" : "lockButtonDelete"}
              disabled={!task.completed ? true : false}
              onClick={() => onItemDelete(task.id)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Item;
