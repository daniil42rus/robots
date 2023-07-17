import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { MarketComponent } from '../../components/MarketComponent';
import styles from './Market.module.scss';
import { observer } from 'mobx-react-lite';

export const Market = observer(() => {
  const { marketComponentArr } = useContext(AppContext);

  return (
    <section className={styles.market}>
      <div className={styles.container}>
        <aside>
          <span className={styles.number}>03</span>
        </aside>
        <div className={styles.market__content}>
          <h2>Рынок комплектующих</h2>
          <ul>
            {marketComponentArr.map((obj) => (
              <li key={obj.id}>
                <MarketComponent {...obj} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
