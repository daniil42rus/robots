import React from 'react';
import { Home } from '../../pages/Home/Index';

import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Home />
      </div>
    </div>
  );
};
