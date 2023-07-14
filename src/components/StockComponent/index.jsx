import React, { useContext } from 'react';
import { ButtonStroke } from '../ButtonStroke';

import styles from './StockComponent.module.scss';
import { AppContext } from '../../App';

export const StockComponent = ({ id, name, price, item }) => {
  const {componentSell } = useContext(AppContext);


  return (
    <>
      <span className={styles.heding}>{name}</span>
      <span className={styles.price}>Стоимость: {price} монет</span>
      <span className={styles.item}>{item} шт</span>
      <ButtonStroke
        price={price}
        id={id}
        onSell={(obj) => componentSell(obj)}
        disabled={!item}
        text={'Продать'}
      />
    </>
  );
};
