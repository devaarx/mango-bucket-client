import React, { ChangeEventHandler, ReactNode } from 'react';
import Checkbox from './Checkbox';
import styles from './TaskItem.module.scss';

interface Props {
  id: string;
  title: string;
  label?: ReactNode;
  status: string;
  onChange: ChangeEventHandler;
}

const TaskItem: React.FC<Props> = ({ id, title, onChange, status, label }) => {
  return (
    <div className={styles.task}>
      <Checkbox htmlId={id} checked={status === 'DONE'} onChange={onChange} />
      <div className={styles.task_content} style={status === 'DONE' ? { opacity: 0.3 } : undefined}>
        <h3>{title}</h3>
        {label && <div className={styles.task_label}>{label}</div>}
      </div>
    </div>
  );
};

export default TaskItem;
