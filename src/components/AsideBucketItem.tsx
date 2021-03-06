import { useNavigate } from '@reach/router';
import React from 'react';
import styles from './AsideBucketItem.module.scss';

interface Props {
  id: string;
  label: string;
  count: number | undefined;
  selected: boolean;
  color: string;
}

const AsideBucketItem: React.FC<Props> = ({ id, label, selected, count, color }) => {
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
          : undefined
      }
    >
      <span className={styles.item_label}>{label}</span>
      <span>{count}</span>
    </button>
  );
};

export default AsideBucketItem;
