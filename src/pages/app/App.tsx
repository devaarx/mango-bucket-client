import { useLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';

interface Props {}

export interface SelectedItem {
  type: 'agenda' | 'bucket';
  value: string | null;
}

const App: React.FC<Props> = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({ type: 'agenda', value: null });
  const location = useLocation();

  // set selected agenda as state from url params if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedAgenda = params.get('agenda');
    const selectedBucket = params.get('bucket');
    if (selectedAgenda) setSelectedItem({ type: 'agenda', value: selectedAgenda });
    if (selectedBucket) setSelectedItem({ type: 'bucket', value: selectedBucket });
  }, [location]);

  return (
    <Layout>
      <Sidebar selectedItem={selectedItem} />
    </Layout>
  );
};

export default App;
