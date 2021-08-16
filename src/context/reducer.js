import {
  ACTION,
  BASE,
  BIRD,
  BIRD_HEIGHT,
  BIRD_WIDTH,
  DIS_COLUMN,
  DIS_PIPE,
  FALL_HEIGHT,
  FLY_HEIGHT,
  GAME,
  PIPE,
  PIPE_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SPEED,
} from './constants';
const defaultState = {
  birdState: {r: '0deg', y: (4 * SCREEN_HEIGHT) / 9},
  // sound: {},

  pipes: [
    {coorx: SCREEN_WIDTH + 1},
    {coorx: SCREEN_WIDTH + DIS_COLUMN + 1},
    {coorx: SCREEN_WIDTH + 2 * DIS_COLUMN + 1},
  ],
  bases: [0, SCREEN_WIDTH],
  gameState: GAME.START,
};
export const reducer = (state = defaultStatus, action) => {
  switch (action.type) {
    //chim bay lênÏ
    case BIRD.FLY:
      return {
        ...state,
        birdState: {y: state.birdState.y - FLY_HEIGHT, r: '-30deg'},
      };

    // chim rơi
    case BIRD.FALL:
      return {
        ...state,
        birdState: {y: state.birdState.y + FALL_HEIGHT, r: '0deg'},
      };

    //cho nền chạy
    case ACTION.RUNNING:
      return {
        ...state,
        pipes: state.pipes.map((value, index) => ({
          ...value,
          coorx: value.coorx - SPEED,
        })),
        bases: state.bases.map((value, index) => value - SPEED),
      };

    //sinh nền : có 2 nền thay nhau
    case BASE.GENERATE:
      if (state.bases[0] === 0) {
        let basesTemp = [...state.bases];
        basesTemp[1] = SCREEN_WIDTH;
        return {...state, bases: [...basesTemp]};
      } else if (state.bases[1] === 0) {
        let basesTemp = [...state.bases];
        basesTemp[0] = SCREEN_WIDTH;
        return {...state, bases: [...basesTemp]};
      }
      return {...state};

    //sinh ống: có 3 cặp ống thay nhau
    case PIPE.GENERATE:
      let pipesTemp = [...state.pipes];
      const topHeight = Math.round(Math.random() * 200) + DIS_PIPE;
      if (pipesTemp[0].coorx < -PIPE_WIDTH) {
        pipesTemp[0].coorx = pipesTemp[2].coorx + DIS_COLUMN;
      } else if (pipesTemp[1].coorx < -PIPE_WIDTH) {
        pipesTemp[1].coorx = pipesTemp[0].coorx + DIS_COLUMN;
      } else if (pipesTemp[2].coorx < -PIPE_WIDTH) {
        pipesTemp[2].coorx = pipesTemp[1].coorx + DIS_COLUMN;
      }
      if (pipesTemp[0].coorx > SCREEN_WIDTH) {
        pipesTemp[0] = {...pipesTemp[0], topHeight};
        return {...state, pipes: [...pipesTemp]};
      }
      if (pipesTemp[1].coorx > SCREEN_WIDTH) {
        pipesTemp[1] = {...pipesTemp[1], topHeight};
        return {...state, pipes: [...pipesTemp]};
      }
      if (pipesTemp[2].coorx > SCREEN_WIDTH) {
        pipesTemp[2] = {...pipesTemp[2], topHeight};
        return {...state, pipes: [...pipesTemp]};
      }

    //kiểm tra điều kiện kết thúc game
    case ACTION.CHECK:
      let screenWidthChia2 = SCREEN_WIDTH / 2;
      let pipeWidthChia2 = PIPE_WIDTH / 2;
      let birdWidthChia2 = BIRD_WIDTH / 2;
      const pipeCheck = state.pipes
        .filter(({coorx}) => {
          if (
            screenWidthChia2 - PIPE_WIDTH <= coorx &&
            coorx <= screenWidthChia2 + PIPE_WIDTH
          ) {
            return true;
          }
        })
        .map(({coorx, topHeight}) => ({
          coorx,
          yTop: topHeight,
          yBottom: topHeight + DIS_PIPE,
        }));

      if (pipeCheck.length) {
        const {coorx, yTop, yBottom} = pipeCheck[0];
        if (
          (state.birdState.y < yTop &&
            coorx < screenWidthChia2 + birdWidthChia2 &&
            coorx + PIPE_WIDTH > screenWidthChia2 - birdWidthChia2) ||
          (state.birdState.y + BIRD_HEIGHT > yBottom &&
            coorx < screenWidthChia2 + birdWidthChia2 &&
            coorx + PIPE_WIDTH > screenWidthChia2 - birdWidthChia2)
        ) {
          return {...state, gameState: GAME.END};
        }
      }
      if (state.birdState.y > (5 * SCREEN_HEIGHT) / 6)
        return {...state, gameState: GAME.END};
      return {...state};

    //bắt đầu chơi
    case GAME.PLAYING:
      return {...state, gameState: GAME.PLAYING};

    //chuyển sang trạng thái bắt đầu game
    case GAME.START:
      return {...defaultState, gameState: GAME.START};
    default:
      console.log('reducer.js - dong 10: loi khong thay doi state');
      return {...state};
  }
};
