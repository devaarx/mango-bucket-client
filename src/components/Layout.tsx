import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className={styles.app}>{children}</div>;
};

export default Layout;
