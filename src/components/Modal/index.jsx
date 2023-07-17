import styles from './Modal.module.scss';

export const Modal = ({ open, setOpen, h3, span, span2, img }) => {
  const close = () => {
    setOpen(!open);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <svg
            onClick={() => close()}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path
              fill="#FF7F22"
              d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"
            />
          </svg>
          {img && <img src="./img/coin.png" alt="Монета" />}
          <div className={styles.modal__content}>
            <h3>{h3}</h3>
            <span>{span}</span>
            {span2 && <span>{span2}</span>}
          </div>
        </div>
      </div>
    </>
  );
};
