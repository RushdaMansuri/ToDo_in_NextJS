import React from 'react';
import Layout from '../app/layout';
import TodoList from '../components/TodoList';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <TodoList/>
    </Layout>
  );
};

export default HomePage;
