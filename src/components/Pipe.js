import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import {
  DIS_PIPE,
  PIPE_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../context/constants';
import context from '../context/context';

const Pipe = () => {
  const {pipes} = useContext(context);
  // console.log(`pipes`, pipes);
  return (
    <View style={{}}>
      {pipes.map(({coorx, topHeight}, index) => (
        <View key={index}>
          <Image
            style={{
              position: 'absolute',
              top: 0,
              left: coorx,
              width: PIPE_WIDTH,
              height: topHeight ?? 0,
              resizeMode: 'stretch',
              transform: [{rotate: '180deg'}],
            }}
            source={require('../../assets/sprites/pipe-green.png')}
          />
          <Image
            style={{
              position: 'absolute',
              top: topHeight ? topHeight + DIS_PIPE : SCREEN_HEIGHT,
              left: coorx,
              width: PIPE_WIDTH,
              resizeMode: 'stretch',
              height: topHeight ? SCREEN_HEIGHT - topHeight - DIS_PIPE : 0,
            }}
            source={require('../../assets/sprites/pipe-green.png')}
          />
        </View>
      ))}
    </View>
  );
};

export default Pipe;
