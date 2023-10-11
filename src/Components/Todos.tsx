import styles from "./todos.module.scss";
import { useEffect, useState, useCallback } from "react";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import TodoList from "./TodoList/TodoList";
import { MainParameters } from "./types";
import { changePosts, createPosts, deletePosts, getPosts } from "./api/requests";
import { TodoContext } from "./context";

function Todos() {
  const [todos, setTodos] = useState<MainParameters[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = useCallback(async () => {
    const data = await getPosts();
    setTodos(data);
  }, []);

  const onAdd = async (newItem: MainParameters) => {
    await createPosts(newItem);
    await loadData();
  };

  const onDelete = async (id: string) => {
    await deletePosts(id);
    await loadData();
  };

  const onChange = async (item: MainParameters) => {
    await changePosts(item);
    await loadData();
  };

  return (
   
      <div className={styles.todo}>
        <h1>To-do list</h1>
        <TodoContext.Provider value={{ todos, onAdd, onDelete, onChange }}>
          <AddTodoForm />
          <TodoList addClass="hello" />
        </TodoContext.Provider>
      </div>

  );
}
export default Todos;
