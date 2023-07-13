import React from 'react';

import styles from './ButtonStroke.module.scss';

export const ButtonStroke = ({ id, price, text, disabled, onSell }) => {
  const handleSell = () => {
    onSell({ id, price });
  };

  return (
    <button onClick={handleSell} disabled={disabled} className={styles.button}>
      <div>{text}</div>
    </button>
  );
};
