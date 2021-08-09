import React, {createContext} from 'react';
import {GAME, BIRD} from './constants';
export default createContext({
  birdState: {r: '0deg', y: 50},
  // sound: {},
  coorx: 300,
  pipes: [],
  gameLoop: null,
  pipeGenerator: null,
  gameState: GAME.START,
  fly: () => {},
  start: () => {},
  die: () => {},
  changeGameState: () => {},
  // changeSoundState: () => {},
});
