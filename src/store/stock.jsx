import React from 'react';
import { makeAutoObservable } from 'mobx';

class Stock {
  stockComponentArr = [
    {
      id: 1,
      name: 'Биорука',
      price: 5,
      item: 0,
    },
    {
      id: 2,
      name: 'Микрочип',
      price: 3,
      item: 0,
    },
    {
      id: 3,
      name: 'Душа',
      price: 15,
      item: 0,
    },
  ];


  constructor() {
    makeAutoObservable(this);
  }
}

export default new Stock();
