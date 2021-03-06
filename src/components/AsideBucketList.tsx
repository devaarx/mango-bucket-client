import React from 'react';
import { useAllBucketsQuery } from '../generated/graphql';
import AsideBucketItem from './AsideBucketItem';
import styles from './AsideBucketList.module.scss';

interface Props {
  selectedBucket: string | null;
}

const AsideBucketList: React.FC<Props> = ({ selectedBucket }) => {
  const { data, loading, error } = useAllBucketsQuery();

  if (error) return <div>error</div>;

  return (
    <div className={styles.bucket}>
      <h3>My Buckets</h3>
      <div className={styles.bucket_list}>
        {loading ? (
          <div>loading...</div>
        ) : (
          data?.allBuckets.map((bucket) => (
            <AsideBucketItem
              key={bucket.id}
              id={bucket.id}
              label={bucket.name}
              count={bucket.tasks?.length}
              selected={bucket.id === selectedBucket}
              color={bucket.color}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AsideBucketList;
