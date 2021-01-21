import { useNavigate } from '@reach/router';
import React from 'react';
import styles from './AsideBucketItem.module.scss';

interface Props {
  id: string;
  label: string;
  count: string;
  selected: boolean;
  color: string;
  completion: string;
}

const AsideBucketItem: React.FC<Props> = ({ id, label, count, selected, color, completion }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.item}
      onClick={() => (!selected ? navigate(`/?bucket=${id}`) : undefined)}
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

export default AsideBucketItem;
