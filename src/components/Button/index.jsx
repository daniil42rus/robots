import React from 'react';
import wallet from '../../store/wallet';

import styles from './Button.module.scss';

export const Button = ({ text, id, price, onBuy, disabled }) => {
  const handleBay = () => {
    onBuy({ id, price });
  };

  return (
    <button disabled={disabled} onClick={handleBay} className={styles.button}>
      {text}
    </button>
  );
};
