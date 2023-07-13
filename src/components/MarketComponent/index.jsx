import React, { useContext } from 'react';
import { Button } from '../Button';

import styles from './MarketComponent.module.scss';
import { AppContext } from '../../App';
import wallet from '../../store/wallet';

export const MarketComponent = ({ id, name, price, imageUrl }) => {
  const { componentBuy } = useContext(AppContext);

  return (
    <>
      <div
        className={styles.imgBack}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <span className={styles.heding}>{name}</span>
      <span className={styles.price}>Стоимость: {price} монет</span>
      <Button
        disabled={price > wallet.walletCoins}
        id={id}
        onBuy={(obj) => componentBuy(obj)}
        price={price}
        text={'Установить'}
      />
    </>
  );
};
