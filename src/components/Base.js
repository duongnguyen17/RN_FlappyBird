import React, {memo, useContext} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {BASE} from '../common';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../context/constants';
import context from '../context/context';
const Base = memo(() => {
  const {bases} = useContext(context);
  return (
    <View style={styles.container}>
      {bases.map((value, index) => (
        <ImageBackground
          key={index}
          style={[
            styles.bg,
            {
              left: value,
            },
          ]}
          source={BASE}
        />
      ))}
    </View>
  );
});

export default Base;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 6,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  bg: {position: 'absolute', width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 6},
});
