export interface PropsItem<T> {
    task: T;
    onDelete(id: string): void;
    onChange(item: T): void;
}