// TodoList.tsx
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';
import styles from '../styles/TodoList.module.css';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number) => {
    setEditTodoId(id);
  };

  const saveEditedTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditTodoId(null);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
  };

  return (
    <div className={styles.container}>
      <h1>ToDo List:</h1>
      
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={styles.item}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className={styles.checkbox}
            />
            {editTodoId === todo.id ? (
              <EditTodoForm
                initialValue={todo.text}
                onSave={(text: string) => saveEditedTodo(todo.id, text)}
                onCancel={cancelEdit}
              />
            ) : (
              <span
                className={todo.completed ? styles.completed : undefined}
                onDoubleClick={() => editTodo(todo.id)}
              >
                {todo.text}
              </span>
            )}
            <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
