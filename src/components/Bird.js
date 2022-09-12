import React, {memo, useContext} from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DOWN_BIRD} from '../common';
import {BIRD_HEIGHT, BIRD_WIDTH} from '../context/constants';
import context from '../context/context';

const Bird = memo(() => {
  const {birdState} = useContext(context);
  return (
    <FastImage
      source={DOWN_BIRD}
      style={[
        styles.bird,
        {
          top: birdState.y,
          transform: [{rotate: birdState.r}],
        },
      ]}
    />
  );
});
export default Bird;
const styles = StyleSheet.create({
  bird: {
    alignSelf: 'center',
    width: BIRD_WIDTH,
    height: BIRD_HEIGHT,
    resizeMode: 'contain',
    position: 'absolute',
  },
});
