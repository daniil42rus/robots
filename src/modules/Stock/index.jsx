import React from 'react';
import stock from '../../store/stock';
import { StockComponent } from '../../components/StockComponent';
import styles from './Stock.module.scss';
import { observer } from 'mobx-react-lite';

export const Stock = observer(() => {
  return (
    <section className={styles.stock}>
      <div className={styles.container}>
        <aside>
          <span className={styles.number}>04</span>
        </aside>
        <div className={styles.stock__content}>
          <h2>Склад</h2>
          <ul>
            {stock.stockComponentArr.map((obj) => (
              <li key={obj.id}>
                <StockComponent {...obj} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
