import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <body className={styles.body}>
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    </body>
  );
};

export default Layout;