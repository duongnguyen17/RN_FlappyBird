import React from 'react';
import {Image, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../context/constants';
const Base = () => {
  return (
    <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
      <Image
        style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 5}}
        source={require('../../assets/sprites/base.png')}
      />
    </View>
  );
};

export default Base;
