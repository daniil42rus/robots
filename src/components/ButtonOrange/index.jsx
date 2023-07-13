import React from 'react';

import styles from './ButtonOrange.module.scss';

export const ButtonOrange = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
