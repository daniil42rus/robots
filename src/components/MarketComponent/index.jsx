import React, { useContext } from 'react';
import { Button } from '../Button';

import styles from './MarketComponent.module.scss';
import { AppContext } from '../../App';
import wallet from '../../store/wallet';
import { observer } from 'mobx-react-lite';

export const MarketComponent = observer(({ id, name, price, imageUrl }) => {
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
        id={id ?? name}
        onBuy={(obj) => componentBuy(obj)}
        price={price}
        text={'Установить'}
      />
    </>
  );
});
