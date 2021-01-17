import React from 'react';
import { getIcon } from '../utils';
import styles from './Agendas.module.scss';
import { useNavigate } from '@reach/router';

interface Props {
  selectedAgenda: string;
}

const AGENDAS = [
  { name: 'today', text: 'Today', icon: 'STAR', color: '#ffaa00' },
  { name: 'upcoming', text: 'Upcoming', icon: 'CALENDAR', color: '#692fc2' },
  { name: 'activity', text: 'Activity', icon: 'CHART', color: '#3689e6' }
];

const Agendas: React.FC<Props> = ({ selectedAgenda }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.agendas}>
      {AGENDAS.map((agenda) => (
        <button
          key={agenda.icon}
          onClick={() => (agenda.name !== selectedAgenda ? navigate(`?agenda=${agenda.name}`) : undefined)}
          className={agenda.name === selectedAgenda ? styles.agendas_active : ''}
        >
          <span style={{ backgroundColor: agenda.color }}>{getIcon(agenda.icon)}</span>
          {agenda.text}
        </button>
      ))}
    </div>
  );
};

export default Agendas;
