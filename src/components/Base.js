import React, {useContext} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../context/constants';
import context from '../context/context';
const Base = () => {
  const {bases} = useContext(context);
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 6,
        alignSelf: 'center',
        flexDirection: 'row',
      }}>
      {bases.map((value, index) => (
        <ImageBackground
          key={index}
          style={{
            position: 'absolute',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT / 6,
            left: value,
          }}
          source={require('../../assets/sprites/base.png')}
        />
      ))}
    </View>
  );
};

export default Base;
