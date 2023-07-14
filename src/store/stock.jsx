import React from 'react';
import { makeAutoObservable } from 'mobx';

class Stock {
  stockComponentArr = [
    {
      id: 1,
      name: 'Биорука',
      price: 5,
      item: 4,
    },
    {
      id: 2,
      name: 'Микрочип',
      price: 3,
      item: 4,
    },
    {
      id: 3,
      name: 'Душа',
      price: 15,
      item: 4,
    },
  ];

  stockComponentArr2 = {
    biohand: {
      item: 0,
      sellPrice: 5,
    },
    microchip: {
      count: 0,
      sellPrice: 3,
    },
    soul: {
      count: 0,
      sellPrice: 15,
    },
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Stock();
