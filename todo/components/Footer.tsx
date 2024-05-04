import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Todo App</p>
    </footer>
  );
};

export default Footer;
