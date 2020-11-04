import React from 'react';
import Agendas from './Agendas';
import styles from './Sidebar.module.scss';
import SideToolbar from './SideToolbar';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className={styles.aside}>
      <Agendas />
      <SideToolbar />
    </div>
  );
};

export default Sidebar;
