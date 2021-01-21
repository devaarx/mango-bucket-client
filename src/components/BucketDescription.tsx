import React from 'react';
import styles from './BucketDescription.module.scss';

interface Props {}

const BucketDescription: React.FC<Props> = () => {
  return <div className={styles.details}>hello bucket description</div>;
};

export default BucketDescription;
