import {BIRD, FALL_HEIGHT, FLY_HEIGHT, GAME, PIPE, SPEED} from './constants';
const defaultState = {
  birdState: {r: '0deg', y: 50},
  // sound: {},
  coorx: 300,
  pipes: [],
  gameState: GAME.START,
};
export const reducer = (state = defaultStatus, action) => {
  switch (action.type) {
    case BIRD.FLY:
      return {
        ...state,
        birdState: {y: state.birdState.y - FLY_HEIGHT, r: '-30deg'},
      };
    case BIRD.FALL:
      return {
        ...state,
        birdState: {y: state.birdState.y + FALL_HEIGHT, r: '0deg'},
      };
    case PIPE.RUNNING:
      // if (!state.pipes.length) {
      //   return {...state};
      // }
      return {...state, coorx: state.coorx - SPEED};
    case PIPE.GENERATE:
      const topHeight = Math.round(Math.random() * 200) + 40;
      return {...state, pipes: [...state.pipes, {topHeight}]};

    case GAME.PLAYING:
      return {...state, gameState: GAME.PLAYING};
    // case 'CHECK':
    //   return {...state};
    default:
      console.log('reducer.js - dong 10: loi khong thay doi state');
      return {...state};
  }
};
