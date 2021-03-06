import React, { ChangeEventHandler } from 'react';
import Checkbox from './Checkbox';
import styles from './TaskItem.module.scss';

interface Props {
  id: string;
  title: string;
  label?: string;
  status: string;
  onChange: ChangeEventHandler;
}

const TaskItem: React.FC<Props> = ({ id, title, onChange, status, label }) => {
  return (
    <div className={styles.task}>
      <Checkbox htmlId={id} checked={status === 'DONE'} onChange={onChange} />
      <h3>{title}</h3>
      <span>{label}</span>
    </div>
  );
};

export default TaskItem;
