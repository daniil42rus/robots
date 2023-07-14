import React from 'react';
import { makeAutoObservable } from 'mobx';

class Construct {
  constructorRobot = [
    {
      id: 1,
      name: 'biohand',
      item: 0,
      need: 4,
    },

    {
      id: 2,
      name: 'microchip',
      item: 0,
      need: 4,
    },

    {
      id: 3,
      name: 'soul',
      item: 0,
      need: 1,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Construct();
