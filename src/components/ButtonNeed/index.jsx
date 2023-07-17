import React from 'react';
import styles from './ButtonNeed.module.scss';
import { SvgGen } from './SvgGen';
import { observer } from 'mobx-react-lite';

export const ButtonNeed = observer(({ id, obj, onGet, dis, btnActive }) => {
  const handleComp = () => {
    onGet({ id, obj, btnActive });
  };

  return (
    <button
      disabled={dis}
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
