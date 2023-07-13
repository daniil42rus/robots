import { useContext, useEffect, useRef, useState } from 'react';
import { ButtonOrange } from '../../components/ButtonOrange';
import { MarketComponent } from '../../components/MarketComponent';
import { StockComponent } from '../../components/StockComponent';
import { observer } from 'mobx-react-lite';
import wallet from '../../store/wallet';
import stock from '../../store/stock';
import styles from './Home.module.scss';
import { AppContext } from '../../App';
import { Modal } from '../../components/Modal';
import { ButtonNeed } from '../../components/ButtonNeed';
import construct from '../../store/construct';

export const Home = observer(() => {
  const [modalOver, setModalOver] = useState(false);

  const {
    marketComponentArr,
    componentGet,
  } = useContext(AppContext);

  const fiveRef = useRef();

  useEffect(() => {
    if (wallet.walletCoins >= 100) {
      setModalOver(true);
      wallet.maxCoins();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [wallet.walletCoins]);

  const addCoins = () => {
    fiveRef.current.checked ? wallet.inc(5) : wallet.inc(1);
  };

  return (
    <>
      {modalOver && <Modal open={modalOver} setOpen={setModalOver}></Modal>}

      <header className={styles.header}>
        <img src="./img/logo.svg" alt="" />
        <ButtonOrange text={'Произвести биоробота'} />
      </header>

      <main>
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
        <section className={styles.stock}>
          <div className={styles.container}>
            <aside>
              <span className={styles.number}>04</span>
            </aside>
            <div className={styles.stock__content}>
              <h2>Склад</h2>
              <ul>
                {stock.stockComponentArr.map((obj, index) => (
                  <li key={index}>
                    <StockComponent {...obj} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.production}>
          <div className={styles.container}>
            <aside>
              <span className={styles.number}>05</span>
            </aside>
            <div className={styles.production__content}>
              <h2>Производство </h2>
              <div className={styles.production__assembly}>
                <div className={styles.production__constructor}>
                  <div className={styles.production__typesrobots}>
                    <div>
                      <span className={styles.production__typesheading}>
                        Тип биоробота:
                      </span>
                      <div>
                        <label>
                          <input
                            className={styles.production__input}
                            type="radio"
                            name="typeBiorobot"
                            id="typeFrontEnd"
                          ></input>

                          <span className={styles.production__inputname}>
                            FrontEnd
                          </span>
                        </label>
                        <label>
                          <input
                            className={styles.production__input}
                            type="radio"
                            name="typeBiorobot"
                            id="typeDesing"
                          ></input>

                          <span className={styles.production__inputname}>
                            Desing
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <span className={styles.production__typesheading}>
                        Cтабилизатор:
                      </span>
                      <div>
                        <label>
                          <input
                            className={styles.production__input}
                            type="radio"
                            name="stabilizerBiorobot"
                            id="stabilizerMale"
                          ></input>

                          <span className={styles.production__inputname}>
                            Male
                          </span>
                        </label>
                        <label>
                          <input
                            className={styles.production__input}
                            type="radio"
                            name="stabilizerBiorobot"
                            id="stabilizerFamale"
                          ></input>

                          <span className={styles.production__inputname}>
                            Famale
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.production__stockItems}>
                    {[...Array(construct.constructorRobot[0].need)].map(
                      (item, id) => (
                        <ButtonNeed
                          obj={construct.constructorRobot[0]}
                          onGet={(obj) => componentGet(obj)}
                          key={id}
                          id={id + 1}
                        />
                      )
                    )}

                    {/* <ul className={styles.production__list}>
                      <li
                        className={
                          styles.production__item +
                          ' ' +
                          styles.production__itemBiohand
                        }
                      />
                    </ul> */}
                  </div>
                </div>
                <div className={styles.production__img}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
});
