import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import styles from './BucketDescription.module.scss';

interface Props {
  bucketTitle: string | undefined;
  bucketDescription: Maybe<string>;
}

const BucketDescription: React.FC<Props> = ({ bucketTitle, bucketDescription }) => {
  return (
    <div className={styles.desc}>
      <div className={styles.desc_header}>
        <h2>{bucketTitle}</h2>
        {bucketDescription && <p>{bucketDescription}</p>}
      </div>
    </div>
  );
};

export default BucketDescription;
