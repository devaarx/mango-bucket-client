import React from 'react';
import BucketDescription from './BucketDescription';
import styles from './BucketDetails.module.scss';

interface Props {
  bucketId: string | null;
}

const BucketDetails: React.FC<Props> = ({ bucketId }) => {
  return (
    <div className={styles.details}>
      <BucketDescription />
      bucket details: {bucketId}
    </div>
  );
};

export default BucketDetails;
