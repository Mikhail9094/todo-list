import styles from "./item.module.scss";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { PropsItem } from "./types";
import { MainParameters } from "../types";


function Item({ task, onDelete, onChange }: PropsItem<MainParameters>) {
  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const [value, setValue] = useState(task.name);

  useEffect(() => {
    setValue(task.name);
  }, [task]);

  const onKeyDown = (e: React.KeyboardEvent ) => {
    if (e.key !== "Enter") return;
    onChange({ ...task, name: value });
    setEditItem(false);
  };

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
          <span
            className={styles.span}
            style={
              task.completed ? { textDecoration: "line-through" } : { textDecoration: undefined }
            }
          >
            {task.name}
          </span>
        ) : (
          <textarea
            className={styles.textArea}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
          />
        )}
      </div>

      <div className={styles.listButtonСhange}>
        {deleteButtonVisible && (
          <>
            <Button
              addClass="buttonEdit"
              disabled={false}
              onClick={() => setEditItem((prev) => !prev)}
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
