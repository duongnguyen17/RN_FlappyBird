import React, {memo, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {GREEN_PIPE} from '../common';
import {DIS_PIPE, PIPE_WIDTH, SCREEN_HEIGHT} from '../context/constants';
import context from '../context/context';

const Pipe = memo(() => {
  const {pipes} = useContext(context);
  return (
    <View style={{}}>
      {pipes.map(({coorx, topHeight}, index) => (
        <View key={index}>
          <FastImage
            style={[
              styles.up,
              {
                height: topHeight ?? 0,
                left: coorx,
              },
            ]}
            source={GREEN_PIPE}
          />
          <FastImage
            style={[
              styles.down,
              {
                height: topHeight ? SCREEN_HEIGHT - topHeight - DIS_PIPE : 0,
                top: topHeight ? topHeight + DIS_PIPE : SCREEN_HEIGHT,
                left: coorx,
              },
            ]}
            source={GREEN_PIPE}
          />
        </View>
      ))}
    </View>
  );
});

export default Pipe;
const styles = StyleSheet.create({
  up: {
    position: 'absolute',
    top: 0,
    width: PIPE_WIDTH,
    resizeMode: 'stretch',
    transform: [{rotate: '180deg'}],
  },
  down: {
    position: 'absolute',
    width: PIPE_WIDTH,
    resizeMode: 'stretch',
  },
});
