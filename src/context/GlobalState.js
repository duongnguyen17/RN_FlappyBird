import React, {useReducer} from 'react';
import {BIRD, GAME, PIPE, SCREEN_HEIGHT, SCREEN_WIDTH} from './constants';
import {reducer} from './reducer';
import Context from './context';
const Globalstate = props => {
  const [state, dispatch] = useReducer(reducer, {
    birdState: {r: '0deg', y: (4 * SCREEN_HEIGHT) / 9},
    // sound:
    coorx: SCREEN_WIDTH,
    pipes: [{topHeight: 100}],
    gameState: GAME.START,
  });
  const fly = () => {
    dispatch({type: BIRD.FLY});
  };
  const die = () => {
    dispatch({type: BIRD.DIE});
  };
  const changeGameState = gameState => {
    dispatch({type: gameState});
  };
  let gameLoop;
  let pipeGenerator;
  const start = () => {
    if (state.gameState !== GAME.PLAYING) {
      gameLoop = setInterval(() => {
        dispatch({type: BIRD.FALL});
        dispatch({type: PIPE.RUNNING});
        // dispatch({type: 'CHECK'});
      }, 50);
      pipeGenerator = setInterval(() => {
        dispatch({type: PIPE.GENERATE});
      }, 400);
      dispatch({type: GAME.PLAYING});
    }
  };

  return (
    <Context.Provider
      value={{
        birdState: state.birdState,
        gameState: state.gameState,
        coorx: state.coorx,
        pipes: state.pipes,
        gameLoop: gameLoop,
        pipeGenerator: pipeGenerator,
        fly: fly,
        start: start,
        die: die,
        changeGameState: changeGameState,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Globalstate;
