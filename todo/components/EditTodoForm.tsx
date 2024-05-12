// EditTodoForm.tsx
import React, { useState } from 'react';
import styles from '../styles/EditTodoForm.module.css';

type EditTodoFormProps = {
  initialValue: string;
  onSave: (text: string) => void;
  onCancel: () => void;
};

const EditTodoForm: React.FC<EditTodoFormProps> = ({ initialValue, onSave, onCancel }) => {
  const [inputText, setInputText] = useState<string>(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(inputText);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Save</button>
      <button type="button" onClick={onCancel} className={styles.button}>Cancel</button>
    </form>
  );
};

export default EditTodoForm;
