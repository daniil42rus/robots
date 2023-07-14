import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { MarketComponent } from '../../components/MarketComponent';
import styles from '../../pages/Home/Home.module.scss';
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
            {marketComponentArr.map((obj, index) => (
              <li key={index}>
                <MarketComponent {...obj} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
