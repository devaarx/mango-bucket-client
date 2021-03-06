import { useLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import BucketDetails from '../../components/BucketDetails';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';

interface Props {}

export interface SelectedItem {
  type: 'agenda' | 'bucket';
  value: string;
}

const App: React.FC<Props> = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({ type: 'agenda', value: '' });
  const location = useLocation();

  // set selected agenda as state from url params if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedAgenda = params.get('agenda');
    const selectedBucket = params.get('bucket');
    if (selectedAgenda) setSelectedItem({ type: 'agenda', value: selectedAgenda });
    if (selectedBucket) setSelectedItem({ type: 'bucket', value: selectedBucket });
  }, [location]);

  // render main content
  const renderMainContent = () => {
    const { type, value } = selectedItem;

    if (type === 'agenda') {
      switch (value) {
        case 'today':
          return <div>Agenda: Today</div>;
        case 'upcoming':
          return <div>Agenda: Upcoming</div>;
        case 'activity':
          return <div>Agenda: Activity</div>;
        default:
          break;
      }
    }

    if (type === 'bucket') {
      return <BucketDetails bucketId={value} />;
    }
  };

  return (
    <Layout>
      <Sidebar selectedItem={selectedItem} />
      {renderMainContent()}
    </Layout>
  );
};

export default App;
