import React from 'react';
import styles from '../styles/Header.module.css'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.todoApp}>Todo App</h1>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/todos">Todos</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
