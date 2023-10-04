import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import TodoList from "./Components/TodoList/TodoList";
import { MainParameters } from "./Components/types";
import { createContext } from "react";
import { changePosts, createPosts, deletePosts, getPosts } from "./Components/api/requests";

export const TodoContext = createContext({} as Props);

interface Props {
  todos: MainParameters[];
  onAdd(newItem: MainParameters): void;
  onDelete(id: string): void;
  onChange(item: MainParameters): void;
}

type D = {
  body: string;
  id: number;
};

function App() { 

  const [todos, setTodos] = useState<MainParameters[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setTodos(data);
    })();
  }, []);


  const onAdd = ( newItem: MainParameters) => {
  
    setTodos((prev) => [...prev, newItem]);
    createPosts(newItem)
  };

  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    deletePosts(id)
  };

  const onChange = (item: MainParameters) => {
    changePosts(item)
   
    // setTodos((prev) => prev.map((todo) => (todo.id === item.id ? item : todo)));
  };



  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <h1>To-do list</h1>
        <TodoContext.Provider
          value={{ todos: todos, onAdd: onAdd, onDelete: onDelete, onChange: onChange }}
        >
          <AddTodoForm />
          <TodoList addClass="hello" />
        </TodoContext.Provider>
      </div>
    </div>
  );
}
export default App;
