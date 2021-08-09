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
  GENERATE: 'GENERATE',
  RUNNING: 'RUNNING',
};

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const FLY_HEIGHT = SCREEN_HEIGHT / 15;
export const FALL_HEIGHT = SCREEN_HEIGHT / 100;
export const SPEED = 10
