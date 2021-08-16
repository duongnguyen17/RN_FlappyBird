import {Dimensions} from 'react-native';

export const BIRD = {
  FLY: 'FLY',
  FALL: 'FALL',
  DIE: 'DIE',
};

export const GAME = {
  START: 'START',
  PLAYING: 'PLAYING',
  END: 'END',
};
export const PIPE = {
  GENERATE: 'PIPE_GENERATE',
  RUNNING: 'PIPE_RUNNING',
};
export const ACTION = {RUNNING: 'BASE_RUNNING', CHECK: 'CHECK'};
export const BASE = {GENERATE: 'BASE_GENERATE', RUNNING: 'BASE_RUNNING'};

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const FLY_HEIGHT = 75;
export const FALL_HEIGHT = SCREEN_HEIGHT / 100;
export const SPEED = 10;
export const DIS_COLUMN = (2 * SCREEN_WIDTH) / 3;
export const DIS_PIPE = 150;
export const PIPE_WIDTH = SCREEN_WIDTH / 5;
export const BIRD_WIDTH = 50;
export const BIRD_HEIGHT = 40;
//mức độ chính xác khi check va chạm (đơn vị pixel)
export const ACCURACY = 5;
