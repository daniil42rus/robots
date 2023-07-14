import React, { useEffect, useRef, useState } from 'react';
import styles from './ButtonNeed.module.scss';
import stock from '../../store/stock';
import { SvgGen } from './SvgGen';
import { observer } from 'mobx-react-lite';

export const ButtonNeed = observer(({ id, obj, onGet, disabled }) => {
  const [btnActive, setbtnActive] = useState(false);

  const stockItems = stock.stockComponentArr.find(
    (item) => item.id === obj.id
  ).item;

  const handleComp = () => {
    setbtnActive(!btnActive);
    onGet({ id, obj, btnActive });
  };

  // const disabledBtn = () => {
  //   if (!stockItems && !obj.item) {
  //     return true;
  //   } else if (stockItems) {
  //     return 1 + obj.item < id;
  //   } else {
  //     return obj.item < id;
  //   }
  // };
  const disabledBtn = () => {
    if (!stockItems && !obj.item) {
      return true;
    } else {
      return stockItems + obj.item < id;
    }
  };

  return (
    <button
      disabled={disabledBtn()}
      id={id}
      className={
        styles.buttondef +
        ' ' +
        `${btnActive ? styles.buttonBoughtImg : styles.buttonInstallImg}`
      }
      onClick={handleComp}
    >
      <SvgGen val={obj.name} />
    </button>
  );
});
