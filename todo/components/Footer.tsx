import React from 'react';
import styles from '../styles/Footer.module.css'; // Import the CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}> {/* Use the CSS class from the module */}
      <p>© {new Date().getFullYear()} Todo App</p>
    </footer>
  );
};

export default Footer;
