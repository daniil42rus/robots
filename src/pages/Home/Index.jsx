import { useEffect, useRef, useState } from 'react';
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
  const productionScroll = useRef();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (wallet.walletCoins >= 100) {
      setModalOpen(true);
      wallet.maxCoins();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [wallet.walletCoins]);

  const handleClickScroll = () => {
    const element = productionScroll.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {modalOpen && (
        <Modal
          h3={'Количество монет ограничено'}
          span={'Вы не можете нацыганить более 100 монет biorobo'}
          open={modalOpen}
          setOpen={setModalOpen}
          img
        />
      )}

      <header className={styles.header}>
        <img src="./img/logo.svg" alt="Logo" />
        <ButtonOrange
          btnClick={handleClickScroll}
          text={'Произвести биоробота'}
        />
      </header>

      <main>
        <Hero />
        <Wallet />
        <Market />
        <Stock />

        <Production scrollRef={productionScroll} />
      </main>
      <footer></footer>
    </>
  );
});
