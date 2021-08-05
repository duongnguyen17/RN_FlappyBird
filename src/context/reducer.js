import {ACTIONS, GAME, BIRD} from './constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FLY:
      return {...state};
    case ACTIONS.DIE:
      return {...state};
    case GAME.START:
      return {...state};
    case GAME.PLAY:
      return {...state};
    case GAME.END:
      return {...state};
    default:
      console.log('reducer.js - dong 10: loi khong thay doi state');
      return {...state};
  }
};
