import React from 'react';
import { makeAutoObservable } from 'mobx';

class Construct {
  constructorRobot = [
    {
      id: 1,
      name: 'Биорука',
      item: 0,
      need: 4,
    },

    {
      id: 2,
      name: 'Микрочип',
      item: 0,
      need: 4,
    },

    {
      id: 3,
      name: 'Душа',
      item: 0,
      need: 1,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Construct();
