import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import context from '../context/context';
import {BIRD} from '../context/constants';

const Bird = () => {
  const {birdState} = useContext(context);
  // console.log(`birdState`, birdState);
  // const img = () => {
  //   let source;
  //   switch (birdState.state) {
  //     case BIRD.UP:
  //       source = require('../../assets/sprites/bluebird-upflap.png');
  //       break;
  //     case BIRD.DOWN:
  //       source = require('../../assets/sprites/bluebird-downflap.png');
  //       break;
  //     case BIRD.DIE:
  //       source = require('../../assets/sprites/bluebird-midflap.png');
  //       break;
  //     default:
  //       source = require('../../assets/sprites/bluebird-midflap.png');
  //       break;
  //   }
  //   return source;
  // };
  return (
    <Image
      source={require('../../assets/sprites/bluebird-downflap.png')}
      style={{
        top: birdState.y,
        alignSelf: 'center',
        width: 50,
        height: 50,
        resizeMode: 'contain',
        position: 'absolute',
        transform: [{rotate: birdState.r}],
      }}
    />
  );
};
export default Bird;
