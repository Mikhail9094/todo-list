import { createContext } from "react";
import { MainParameters } from "./types";

export const TodoContext = createContext({} as Props);

interface Props {
  todos: MainParameters[];
  onAdd(newItem: MainParameters): void;
  onDelete(id: string): void;
  onChange(item: MainParameters): void;
}