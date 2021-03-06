import React from 'react';
import { useBucketInfoQuery } from '../generated/graphql';
import BucketDescription from './BucketDescription';
import styles from './BucketDetails.module.scss';
import TaskItem from './TaskItem';

interface Props {
  bucketId: string;
}

const BucketDetails: React.FC<Props> = ({ bucketId }) => {
  const { data, error } = useBucketInfoQuery({ variables: { bucket_id: bucketId } });

  if (error) return <div>error</div>;

  return (
    <div className={styles.details}>
      <BucketDescription bucketTitle={data?.bucketInfo.name} bucketDescription={data?.bucketInfo?.description} />
      {data?.bucketInfo.tasks?.map((bucket) => (
        <TaskItem
          key={bucket.id}
          id={bucket.id}
          title={bucket.name}
          status={bucket.status}
          label={bucket.status}
          onChange={() => console.log('object')}
        />
      ))}
    </div>
  );
};

export default BucketDetails;
