import React from 'react';
import { SelectedItem } from '../pages/app/App';
import Agendas from './Agendas';
import BucketList from './BucketList';
import styles from './Sidebar.module.scss';
import SideToolbar from './SideToolbar';

interface Props {
  selectedItem: SelectedItem;
}

const Sidebar: React.FC<Props> = ({ selectedItem }) => {
  const selectedAgenda = selectedItem.type === 'agenda' ? (selectedItem.value ? selectedItem.value : 'today') : '';
  const selectedBucket = selectedItem.type === 'bucket' ? selectedItem.value : null;
  // console.log(selectedItem);
  return (
    <div className={styles.aside}>
      <Agendas selectedAgenda={selectedAgenda} />
      <BucketList selectedBucket={selectedBucket} />
      <SideToolbar />
    </div>
  );
};

export default Sidebar;
