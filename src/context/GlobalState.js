import React, {useReducer, useCallback} from 'react';
import {
  BIRD,
  GAME,
  PIPE,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  DIS_COLUMN,
  BASE,
  ACTION,
} from './constants';
import {reducer} from './reducer';
import Context from './context';
const Globalstate = props => {
  const [state, dispatch] = useReducer(reducer, {
    birdState: {r: '0deg', y: (4 * SCREEN_HEIGHT) / 9},
    pipes: [
      {coorx: SCREEN_WIDTH + 1},
      {coorx: SCREEN_WIDTH + DIS_COLUMN + 1},
      {coorx: SCREEN_WIDTH + 2 * DIS_COLUMN + 1},
    ],
    bases: [0, SCREEN_WIDTH],
    gameState: GAME.START,
  });
  const fly = () => {
    dispatch({type: BIRD.FLY});
  };

  let gameLoop;
  let pipeGenerator;
  const start = useCallback(() => {
    if (state.gameState === GAME.START) {
      pipeGenerator = setInterval(() => {
        dispatch({type: BASE.GENERATE});
        dispatch({type: PIPE.GENERATE});
      }, 50);
      gameLoop = setInterval(() => {
        dispatch({type: BIRD.FALL});
        dispatch({type: ACTION.RUNNING});
        dispatch({type: ACTION.CHECK});
      }, 50);

      dispatch({type: GAME.PLAYING});
    } else {
      dispatch({type: GAME.START});
    }
  }, [state.gameState]);
  const stop = useCallback(() => {
    clearInterval(gameLoop);
    clearInterval(pipeGenerator);
  }, [gameLoop, pipeGenerator]);

  const touchScreen = () => {
    fly();
    if (state.gameState !== GAME.PLAYING) {
      start();
    }
  };
  return (
    <Context.Provider
      value={{
        birdState: state.birdState,
        gameState: state.gameState,
        pipes: state.pipes,
        bases: state.bases,
        touchScreen: touchScreen,
        stop: stop,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Globalstate;
