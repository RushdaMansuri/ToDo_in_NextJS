// AddTodoForm.tsx
import React, { useState } from 'react';
import styles from '../styles/AddToDoForm.module.css';

type AddTodoFormProps = {
  onAdd: (text: string) => void;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    onAdd(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={inputText}
        onChange={handleInputChange}
        className={styles.input}
      />
      <br/>
      <button type="submit" className={styles.button}>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
