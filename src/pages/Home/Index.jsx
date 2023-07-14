import { useEffect, useState } from 'react';
import { ButtonOrange } from '../../components/ButtonOrange';
import { observer } from 'mobx-react-lite';
import wallet from '../../store/wallet';
import styles from './Home.module.scss';
import { Modal } from '../../components/Modal';
import { Hero } from '../../modules/Hero';
import { Wallet } from '../../modules/Wallet';
import { Market } from '../../modules/Market';
import { Stock } from '../../modules/Stock';
import { Production } from '../../modules/Production';

export const Home = observer(() => {
  const [modalOver, setModalOver] = useState(false);

  useEffect(() => {
    if (wallet.walletCoins >= 100) {
      setModalOver(true);
      wallet.maxCoins();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [wallet.walletCoins]);

  return (
    <>
      {modalOver && <Modal open={modalOver} setOpen={setModalOver}></Modal>}

      <header className={styles.header}>
        <img src="./img/logo.svg" alt="" />
        <ButtonOrange text={'Произвести биоробота'} />
      </header>

      <main>
        <Hero />
        <Wallet />
        <Market />
        <Stock />

        <Production />
      </main>
      <footer></footer>
    </>
  );
});
