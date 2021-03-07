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
      <div className={styles.section}>
        <h3 className={styles.section_heading}>Tasks</h3>
        <div className={styles.section_content}>
          {data?.bucketInfo.tasks?.length ? (
            data?.bucketInfo.tasks?.map((bucket) => (
              <TaskItem
                key={bucket.id}
                id={bucket.id}
                title={bucket.name}
                status={bucket.status}
                onChange={() => console.log('object')}
              />
            ))
          ) : (
            <p>No Tasks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BucketDetails;
