import React from 'react';
import { makeAutoObservable } from 'mobx';
import stock from './stock';

class Wallet {
  walletCoins = 0;

  constructor() {
    makeAutoObservable(this);
  }

  inc(number) {
    this.walletCoins += number;
  }

  dec(number) {
    this.walletCoins -= number;
  }

  maxCoins() {
    this.walletCoins = 100;
  }
  minCoins() {
    this.walletCoins = 0;
  }
}

export default new Wallet();
