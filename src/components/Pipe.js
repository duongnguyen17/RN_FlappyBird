import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../context/constants';
import context from '../context/context';

const Pipe = () => {
  const {coorx, pipes} = useContext(context);
  // console.log(`pipes`, coorx, pipes);
  return (
    <View style={{}}>
      {pipes.map(({topHeight}, index) => (
        <View key={index}>
          <Image
            style={{
              position: 'absolute',
              top: 0,
              left: coorx + (index * 2 * SCREEN_WIDTH) / 3,
              width: SCREEN_WIDTH / 5,
              height: topHeight,
              resizeMode: 'stretch',
              transform: [{rotate: '180deg'}],
            }}
            source={require('../../assets/sprites/pipe-green.png')}
          />
          <Image
            style={{
              position: 'absolute',
              top: topHeight + (SCREEN_HEIGHT * 3) / 20,
              left: coorx + (index * 2 * SCREEN_WIDTH) / 3,
              width: SCREEN_WIDTH / 5,
              resizeMode: 'stretch',
              height: (17 * SCREEN_HEIGHT) / 20 - topHeight,
            }}
            source={require('../../assets/sprites/pipe-green.png')}
          />
        </View>
      ))}
    </View>
  );
};

export default Pipe;
