import React, {createContext} from 'react';

export default createContext({
  birdState: {},
  // sound: {},
  gameState: {},
  fly: () => {},
  die: () => {},
  changeGameState: () => {},
  // changeSoundState: () => {},
});
