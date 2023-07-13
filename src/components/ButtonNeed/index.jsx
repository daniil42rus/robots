import React, { useContext } from 'react';
import styles from './ButtonNeed.module.scss';
import { AppContext } from '../../App';
import { remove } from 'mobx';
import stock from '../../store/stock';

export const ButtonNeed = ({ id, obj, onGet }) => {
  //   const {  stockComponentArr } = useContext(AppContext);
  const stockItems = stock.stockComponentArr.find(
    (item) => item.id === obj.id
  ).item;

  const handleComp = () => {
    onGet({ id, obj });
    disabledBtn();
  };

  const disabledBtn = () => {
    if (!stockItems && !obj.item) {
      return true;
    } else {
      return obj.item + stockItems < id;
    }

    // return !stockItems && obj.item < id;
  };

  return (
    <button
      disabled={disabledBtn()}
      id={id}
      className={styles.buttonNeed + ' ' + styles.buttonNeedImg}
      onClick={handleComp}
    >
      {obj.item}
    </button>
  );
};
