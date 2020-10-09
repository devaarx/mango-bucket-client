import React from 'react';
import { getIcon } from '../utils';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div>
      hello sidebar
      <div>
        {getIcon('ADD')}
        {getIcon('SEARCH')}
        {getIcon('GEAR')}
      </div>
    </div>
  );
};

export default Sidebar;
