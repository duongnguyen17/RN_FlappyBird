import React, {useReducer} from 'react';
import {ACTIONS, BIRD, GAME} from './constants';
import {reducer} from './reducer';
import Context from './context';
const Globalstate = props => {
  const [state, dispatch] = useReducer(reducer, {
    birdState: BIRD.UP,
    // sound:
    gameState: GAME.START,
  });
  const fly = () => {
    dispatch({type: ACTIONS.FLY});
  };
  const die = () => {
    dispatch({type: ACTIONS.DIE});
  };
  const changeGameState = gameState => {
    dispatch({type: gameState});
  };
  return (
    <Context.Provider
      value={{
        birdState: state.birdState,
        gameState: state.gameState,
        fly: fly,
        die: die,
        changeGameState: changeGameState,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Globalstate;
