import React from 'react';
// import { useAllBucketsQuery } from '../generated/graphql';
import BucketItem from './BucketItem';
import styles from './BucketList.module.scss';

interface Props {
  selectedBucket: string | null;
}

// dummy data for testing
const dummy = [
  { id: 'd68s76f7s6f8sd7f', name: '🚀 Getting Started', count: '3', color: '#14AAF5', completion: '33' },
  { id: '76d87y8s7dfs7yfs', name: '🗳 Noted React Native', count: '12', color: '#ED5353', completion: '50' },
  { id: '768asda7sd6sdasd', name: '⛸ Ice Skate Practice', count: '8', color: '#692FC2', completion: '0' },
  { id: 'uihasd8as89879as', name: '🏖 Travel Plan 2021', count: '6', color: '#FFAA00', completion: '66' }
];

const BucketList: React.FC<Props> = ({ selectedBucket }) => {
  // const { data } = useAllBucketsQuery();
  // console.log(data);

  return (
    <div className={styles.bucket}>
      <h3>My Buckets</h3>
      <div className={styles.bucket_list}>
        {dummy.map((bucket) => (
          <BucketItem
            key={bucket.id}
            id={bucket.id}
            label={bucket.name}
            count={bucket.count}
            selected={bucket.id === selectedBucket}
            color={bucket.color}
            completion={bucket.completion}
          />
        ))}
      </div>
    </div>
  );
};

export default BucketList;
