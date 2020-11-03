import React from 'react';
import { getIcon } from '../utils';
import styles from './SideToolbar.module.scss';

interface Props {}

const SideToolbar: React.FC<Props> = () => {
  return (
    <div className={styles.tool}>
      <button>
        {getIcon('ADD')}
        <span>Add Bucket</span>
      </button>
      <button>{getIcon('SEARCH')}</button>
      <button>{getIcon('GEAR')}</button>
    </div>
  );
};

export default SideToolbar;
