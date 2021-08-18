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
    bases: [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
    count: 0,
    score: 0,
    gameState: GAME.START,
  });
  const fly = () => {
    dispatch({type: BIRD.FLY});
  };

  let gameLoop;
  let pipeGenerator;
  let baseGenerator;
  let check;
  const start = useCallback(() => {
    dispatch({type: GAME.PLAYING});
    pipeGenerator = setInterval(() => {
      dispatch({type: PIPE.GENERATE});
    }, 350);
    baseGenerator = setInterval(() => {
      dispatch({type: BASE.GENERATE});
    }, 1000);
    gameLoop = setInterval(() => {
      dispatch({type: BIRD.FALL});
      dispatch({type: ACTION.RUNNING});
    }, 50);
    check = setInterval(() => {
      dispatch({type: ACTION.CHECK});
    }, 50);
  }, [gameLoop, pipeGenerator, baseGenerator, check]);
  const stop = useCallback(() => {
    // console.log(
    //   `stop()`,
    //   gameLoop,
    //   pipeGenerator,
    //   baseGenerator,
    //   check,
    //   state.gameState,
    // );
    clearInterval(gameLoop);
    clearInterval(pipeGenerator);
    clearInterval(baseGenerator);
    clearInterval(check);
  }, [gameLoop, pipeGenerator, baseGenerator, check]);

  const replay = () => {
    dispatch({type: GAME.START});
  };
  const touchScreen = () => {
    fly();
    if (state.gameState === GAME.START) {
      start();
    } else if (state.gameState === GAME.END) {
      replay();
    }
  };

  return (
    <Context.Provider
      value={{
        birdState: state.birdState,
        gameState: state.gameState,
        pipes: state.pipes,
        bases: state.bases,
        score: state.score,
        touchScreen: touchScreen,
        stop: stop,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Globalstate;
