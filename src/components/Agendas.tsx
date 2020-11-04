import React from 'react';
import { getIcon } from '../utils';
import styles from './Agendas.module.scss';

interface Props {}

const Agendas: React.FC<Props> = () => {
  return (
    <div className={styles.agendas}>
      <button>
        <span>{getIcon('CHART')}</span>
        Activity
      </button>
      <button>
        <span>{getIcon('STAR')}</span>
        Today
      </button>
      <button>
        <span>{getIcon('CALENDAR')}</span>
        Upcoming
      </button>
    </div>
  );
};

export default Agendas;
