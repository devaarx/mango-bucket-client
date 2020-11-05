import React from 'react';
// import { useAllBucketsQuery } from '../generated/graphql';
import BucketItem from './BucketItem';
import styles from './BucketList.module.scss';

interface Props {}

const BucketList: React.FC<Props> = () => {
  // const { data } = useAllBucketsQuery();
  // console.log(data);

  return (
    <div className={styles.bucket}>
      <h3>My Buckets</h3>
      <div className={styles.bucket_list}>
        <BucketItem label={'🚀 Getting Started'} count="3" selected={false} color="#14AAF5" completion="33" />
        <BucketItem label={'🗳 Noted React Native'} count="12" selected={false} color="#ED5353" completion="50" />
        <BucketItem label={'⛸ Ice Skate Practice'} count="8" selected={false} color="#692FC2" completion="0" />
        <BucketItem label={'🏖 Travel Plan 2021'} count="6" selected={false} color="#FFAA00" completion="66" />
      </div>
    </div>
  );
};

export default BucketList;
