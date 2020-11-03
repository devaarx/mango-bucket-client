import React from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Layout>
      <Sidebar />
    </Layout>
  );
};

export default App;
