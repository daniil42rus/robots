import React, { useContext, useState } from 'react';
import construct from '../../store/construct';
import { AppContext } from '../../App';
import styles from './Production.module.scss';
import { ButtonNeed } from '../../components/ButtonNeed';
import { ButtonOrange } from '../../components/ButtonOrange';
import { observer } from 'mobx-react-lite';
import wallet from '../../store/wallet';
import { useEffect } from 'react';
import stock from '../../store/stock';
import { Modal } from '../../components/Modal';

export const Production = observer(({ scrollRef }) => {
  const { componentGet } = useContext(AppContext);

  const [typeRobot, setTypeRobot] = useState(33);

  const [stableRobot, setStableRobot] = useState(0);

  const [coordinateV, setCoordinateV] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const howComp = construct.constructorRobot.map(
    (item, id) =>
      construct.constructorRobot[id].need - construct.constructorRobot[id].item
  );

  console.log();

  const walletCoin = wallet.walletCoins;

  const [howBiohand, howMicro, howSoul] = howComp;

  const [biohandAnd, setBiohandAnd] = useState(', ');
  const [microAnd, setMicroAnd] = useState(', ');

  const constructComp = howComp.reduce((a, b) => a + b, 0) === 0;

  const btnDis = () => {
    return constructComp & (walletCoin >= 10);
  };

  const btnConstActive = (obj, id) => {
    return obj.item >= id;
  };

  const btnDisConp = (obj, id) => {
    const stockItems = stock.stockComponentArr.find(
      (item) => item.id === obj.id
    ).item;

    if (!stockItems && !obj.item) {
      return true;
    } else if (stockItems) {
      return 1 + obj.item < id;
    } else {
      return obj.item < id;
    }
  };

  const buyRobot = () => {
    setModalOpen(true);
    wallet.dec(10);
    setCoordinateV(2);
  };

  useEffect(() => {
    if (!constructComp) {
      setCoordinateV(99);
    } else {
      setCoordinateV(50);
    }

    if (Boolean(howMicro) & Boolean(howSoul)) {
      setBiohandAnd(', ');
    } else if (!Boolean(howMicro) & !Boolean(howSoul)) {
      setBiohandAnd('');
    } else {
      setBiohandAnd(' и ');
    }

    if (!Boolean(howMicro) || !Boolean(howSoul)) {
      setMicroAnd('');
    } else if (Boolean(howMicro)) {
      setMicroAnd(' и ');
    } else {
      setMicroAnd(', ');
    }
  }, [constructComp, howBiohand, howMicro, howSoul]);

  return (
    <>
      {modalOpen && (
        <Modal
          h3={'Биоробот произведён'}
          span={'Поздравляем! '}
          span2={'Вы произвели биоробота'}
          open={modalOpen}
          setOpen={setModalOpen}
        />
      )}
      <section ref={scrollRef} className={styles.production}>
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
                      <div className={styles.production__typesBlock}>
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
                      <div className={styles.production__typesBlock}>
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
                                  dis={btnDisConp(
                                    construct.constructorRobot[id],
                                    i + 1
                                  )}
                                  btnActive={btnConstActive(
                                    construct.constructorRobot[id],
                                    i + 1
                                  )}
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
                      btnClick={() => buyRobot()}
                    />
                  </li>
                  <li className={styles.production__annotations}>
                    {(Boolean(howBiohand) ||
                      Boolean(howMicro) ||
                      Boolean(howSoul)) && (
                      <span>
                        {'Для производства биоробота не хватает '}
                        {howBiohand ? howBiohand + ' биоруки' + biohandAnd : ''}
                        {howMicro ? howMicro + ' микрочипа ' + microAnd : ''}
                        {howSoul ? howSoul + ' души ' : ''}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
              <div
                style={{
                  backgroundPosition: `${
                    Number(typeRobot) + Number(stableRobot)
                  }% ${Number(coordinateV)}%`,
                }}
                className={styles.production__img}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
