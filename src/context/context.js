import React, {createContext} from 'react';
import {GAME, BIRD} from './constants';
export default createContext({
  birdState: {r: '0deg', y: 50},
  // sound: {},
  bases: [],
  pipes: [],
  gameState: GAME.START,
  fly: () => {},
  start: () => {},
  stop: () => {},
  // changeSoundState: () => {},
});
