import React from 'react';
import styles from './BucketItem.module.scss';

interface Props {
  label: string;
  count: string;
  selected: boolean;
  color: string;
  completion: string;
}

const BucketItem: React.FC<Props> = ({ label, count, selected, color, completion }) => {
  return (
    <button
      className={styles.item}
      style={
        selected
          ? {
              backgroundColor: '#e4e4e4',
              color: '#383838'
            }
          : {}
      }
    >
      <span className={styles.item_label}>{label}</span>
      <span>{count}</span>
    </button>
  );
};

export default BucketItem;
