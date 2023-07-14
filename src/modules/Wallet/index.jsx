import React, { useRef } from 'react';
import wallet from '../../store/wallet';
import styles from './Wallet.module.scss';
import { observer } from 'mobx-react-lite';

export const Wallet = observer(() => {
  const fiveRef = useRef();

  const addCoins = () => {
    fiveRef.current.checked ? wallet.inc(5) : wallet.inc(1);
  };

  return (
    <section className={styles.wallet}>
      <div className={styles.container}>
        <aside>
          <span className={styles.number}>02</span>
        </aside>
        <div className={styles.wallet__content}>
          <h2>Кошелёк криптовалют</h2>
          <ul>
            {[...Array(wallet.walletCoins)].map((item, id) => (
              <li
                key={id}
                style={{
                  zIndex: [...Array(wallet.walletCoins)].length - id,
                }}
              />
            ))}
          </ul>
          <p>
            <span>{wallet.walletCoins}</span>
            biorobo монет
          </p>
          <button
            disabled={wallet.walletCoins >= 100}
            onClick={() => addCoins()}
          >
            Нацыганить
          </button>

          <label form="fiveCoins">
            <input
              disabled={wallet.walletCoins >= 100}
              ref={fiveRef}
              type="checkbox"
              id="fiveCoins"
            />
            <span className={styles.check__span}></span>
            <span className={styles.imput__text}>Цыганить по 5 монет</span>
          </label>
        </div>
      </div>
    </section>
  );
});
