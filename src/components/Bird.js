import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import context from '../context/context';
import {BIRD_HEIGHT, BIRD_WIDTH} from '../context/constants';

const Bird = () => {
  const {birdState} = useContext(context);
  return (
    <Image
      source={require('../../assets/sprites/bluebird-downflap.png')}
      style={{
        top: birdState.y,
        alignSelf: 'center',
        width: BIRD_WIDTH,
        height: BIRD_HEIGHT,
        resizeMode: 'contain',
        position: 'absolute',
        transform: [{rotate: birdState.r}],
        // backgroundColor: 'gray',
      }}
    />
  );
};
export default Bird;
