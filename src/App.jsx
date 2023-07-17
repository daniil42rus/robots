import { createContext, useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import wallet from './store/wallet';
import stock from './store/stock';
import construct from './store/construct';

export const AppContext = createContext({});

const App = () => {
  const marketComponentArr = [
    {
      id: 1,
      name: 'Биорука',
      price: 7,
      imageUrl: './img/biohand.svg',
    },
    {
      id: 2,
      name: 'Микрочип',
      price: 5,
      imageUrl: './img/microchip.svg',
    },
    {
      id: 3,
      name: 'Душа',
      price: 25,
      imageUrl: './img/soul.svg',
    },
  ];

  const componentBuy = (obj) => {
    wallet.dec(obj.price);
    stock.stockComponentArr.find(
      (stockObj) => Number(stockObj.id) === Number(obj.id)
    ).item += 1;
  };

  const componentSell = (obj) => {
    wallet.inc(obj.price);
    stock.stockComponentArr.find(
      (stockObj) => Number(stockObj.id) === Number(obj.id)
    ).item -= 1;
  };

  const componentGet = ({ id, obj, btnActive }) => {
    if (btnActive) {
      stock.stockComponentArr.find(
        (stockObj) => Number(stockObj.id) === Number(obj.id)
      ).item += 1;

      construct.constructorRobot.find(
        (constObj) => Number(constObj.id) === Number(obj.id)
      ).item -= 1;
    } else {
      stock.stockComponentArr.find(
        (stockObj) => Number(stockObj.id) === Number(obj.id)
      ).item -= 1;

      construct.constructorRobot.find(
        (constObj) => Number(constObj.id) === Number(obj.id)
      ).item += 1;
    }
  };

  return (
    <AppContext.Provider
      value={{
        marketComponentArr,
        componentBuy,
        componentSell,
        componentGet,
      }}
    >
      <Layout />
    </AppContext.Provider>
  );
};

export default App;
