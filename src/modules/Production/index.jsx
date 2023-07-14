import React, { useContext, useState } from 'react';
import construct from '../../store/construct';
import { AppContext } from '../../App';
import styles from './Production.module.scss';
import { ButtonNeed } from '../../components/ButtonNeed';
import { ButtonOrange } from '../../components/ButtonOrange';
import { observer } from 'mobx-react-lite';
import wallet from '../../store/wallet';
import { useEffect } from 'react';

export const Production = observer(() => {
  const { componentGet } = useContext(AppContext);

  const [typeRobot, setTypeRobot] = useState(33);

  const [stableRobot, setStableRobot] = useState(0);

  const btnDis = () => {
    const constructComp =
      construct.constructorRobot
        .map(
          (item, id) =>
            construct.constructorRobot[id].need -
            construct.constructorRobot[id].item
        )
        .reduce((a, b) => a + b, 0) === 0;

    const walletCoin = wallet.walletCoins >= 10;

    return constructComp & walletCoin;
  };

  useEffect(() => {
    console.log(typeRobot);
    console.log(stableRobot);
  }, [typeRobot, stableRobot]);

  return (
    <section className={styles.production}>
      <div className={styles.container}>
        <aside>
          <span className={styles.number}>05</span>
        </aside>
        <div className={styles.production__content}>
          <h2>Производство </h2>
          <div className={styles.production__grid}>
            <div className={styles.production__assembly}>
              <ul className={styles.production__constructor}>
                <li>
                  <div className={styles.production__typesrobots}>
                    <div>
                      <p className={styles.production__typesheading}>
                        Тип биоробота:
                      </p>
                      <div>
                        <label>
                          <input
                            className={styles.production__input}
                            defaultChecked
                            value={33}
                            type="radio"
                            name="typeBiorobot"
                            id="typeFrontEnd"
                            onChange={(e) => setTypeRobot(e.target.value)}
                          ></input>

                          <span className={styles.production__inputname}>
                            FrontEnd
                          </span>
                        </label>
                        <label>
                          <input
                            className={styles.production__input}
                            value={0}
                            type="radio"
                            name="typeBiorobot"
                            id="typeDesing"
                            onChange={(e) => setTypeRobot(e.target.value)}
                          ></input>

                          <span className={styles.production__inputname}>
                            Desing
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className={styles.production__typesheading}>
                        Cтабилизатор:
                      </p>
                      <div>
                        <label>
                          <input
                            className={styles.production__input}
                            defaultChecked
                            value={0}
                            type="radio"
                            name="stabilizerBiorobot"
                            id="stabilizerMale"
                            onChange={(e) => setStableRobot(e.target.value)}
                          ></input>

                          <span className={styles.production__inputname}>
                            Male
                          </span>
                        </label>
                        <label>
                          <input
                            className={styles.production__input}
                            value={67}
                            type="radio"
                            name="stabilizerBiorobot"
                            id="stabilizerFamale"
                            onChange={(e) => setStableRobot(e.target.value)}
                          ></input>

                          <span className={styles.production__inputname}>
                            Famale
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.production__stockItems}>
                    {construct.constructorRobot.map((item, id) => (
                      <ul key={id} className={styles.production__list}>
                        {[...Array(construct.constructorRobot[id].need)].map(
                          (item, i) => (
                            <li className={styles.production__item} key={i}>
                              <ButtonNeed
                                obj={construct.constructorRobot[id]}
                                onGet={(obj) => componentGet(obj)}
                                id={i + 1}
                              />
                            </li>
                          )
                        )}
                      </ul>
                    ))}
                  </div>
                </li>
                <li className={styles.production__btn}>
                  <ButtonOrange
                    disabled={!btnDis()}
                    text={'Произвести за 10 монет'}
                    btnClick={() => wallet.dec(10)}
                  />
                </li>
                <li className={styles.production__annotations}>
                  <span>
                    Для производства биоробота не хватает 2 биоруки, 3 микрочипа
                    и 1 души
                  </span>
                </li>
              </ul>
            </div>
            <div
              style={{
                backgroundPosition: `${Number(typeRobot) + Number(stableRobot)}% ${98}%`,
              }}
              className={styles.production__img}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
});
