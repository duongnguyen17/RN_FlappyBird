import React, {useContext} from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BG_DAY, MESSAGE} from '../common';
import Base from '../components/Base';
import Bird from '../components/Bird';
import Pipe from '../components/Pipe';
import Score from '../components/Score';
import {
  BIRD_HEIGHT,
  GAME,
  PIPE_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../context/constants';
import context from '../context/context';

const Game = () => {
  console.log('SCREEN_HEIGHT', SCREEN_HEIGHT);
  console.log('SCREEN_WIDTH', SCREEN_WIDTH);
  const {gameState, stop, touchScreen} = useContext(context);

  if (gameState === GAME.END) {
    stop();
  }

  return (
    <ImageBackground source={BG_DAY} style={{flex: 1}}>
      <Pipe />
      <Base />
      {gameState === GAME.START ? (
        <View style={styles.messageContainer}>
          <FastImage source={MESSAGE} style={styles.message} />
        </View>
      ) : (
        <Score style={styles.score} />
      )}
      <Bird />
      <Pressable style={styles.touch} onPress={touchScreen} />
    </ImageBackground>
  );
};
export default Game;

const styles = StyleSheet.create({
  messageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    height: 267,
    width: 186,
  },
  score: {
    justifyContent: 'center',
    alignItems: 'center',
    top: SCREEN_HEIGHT / 10,
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 2 * BIRD_HEIGHT,
    width: PIPE_WIDTH,
  },
  touch: {
    position: 'absolute',
    flex: 1,
    zIndex: 999,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
