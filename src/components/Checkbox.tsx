import React, { ChangeEventHandler } from 'react';
import styles from './Checkbox.module.scss';

interface Props {
  htmlId: string;
  onChange: ChangeEventHandler;
  label?: HTMLElement;
  checked: boolean;
}

const Checkbox: React.FC<Props> = ({ htmlId, onChange, label, checked }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={htmlId} onChange={onChange} checked={checked} />
      <label htmlFor={htmlId}>{label}</label>
    </div>
  );
};

export default Checkbox;
