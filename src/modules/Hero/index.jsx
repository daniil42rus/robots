import React from 'react';
import styles from './Hero.module.scss';


export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <aside>
          <span className={styles.number}>01</span>
          <span className={styles.scroll}>скролл</span>
        </aside>
        <div className={styles.hero__left}>
          <h1>Фабрика по производству биороботов</h1>
          <p>класса «монитор-кресло»</p>
        </div>
        <div className={styles.hero__right}></div>
      </div>
    </section>
  );
};
