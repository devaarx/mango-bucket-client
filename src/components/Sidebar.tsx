import React from 'react';
import styles from './Sidebar.module.scss';
import SideToolbar from './SideToolbar';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className={styles.aside}>
      <h3>hello sidebar</h3>
      <SideToolbar />
    </div>
  );
};

export default Sidebar;
