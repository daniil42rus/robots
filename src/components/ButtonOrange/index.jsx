import React from 'react';

import styles from './ButtonOrange.module.scss';

export const ButtonOrange = ({ text, disabled, btnClick }) => {
  const onHandle = () => {
    btnClick()
  };

  return (
    <button onClick={onHandle} disabled={disabled} className={styles.button}>
      {text}
    </button>
  );
};
