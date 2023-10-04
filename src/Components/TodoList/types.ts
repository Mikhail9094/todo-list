export interface PropsTodoList<T> {
    todos: T[];
    onDelete(id: string): void;
    onChange(item: T): void;
}