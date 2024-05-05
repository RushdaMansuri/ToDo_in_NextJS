import React from 'react';
import Image from 'next/image'; 
import styles from '../styles/Header.module.css'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Use the next/Image component */}
        <Image
          src="/todo.png" // Adjust the path as needed
          alt="Todo App Icon"
          width={1000} // Set the desired width
          height={1000} // Set the desired height
          className={styles.todoIcon}
        />
      </div>
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
