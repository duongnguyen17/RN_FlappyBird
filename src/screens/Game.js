import React, {useContext} from 'react';
import {
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import context from '../context/context';
import {
  BIRD_HEIGHT,
  GAME,
  PIPE_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../context/constants';
import Bird from '../components/Bird';
import Base from '../components/Base';
import Pipe from '../components/Pipe';
import Score from '../components/Score';

const Game = props => {
  const {gameState, stop, touchScreen} = useContext(context);

  if (gameState === GAME.END) {
    stop();
  }

  return (
    <ImageBackground
      source={require('../../assets/sprites/background-day.png')}
      style={{flex: 1}}>
      <Pipe />
      <Base />

      {gameState === GAME.START ? (
        <Image
          source={require('../../assets/sprites/message.png')}
          style={{
            height: SCREEN_HEIGHT / 2,
            width: (2 * SCREEN_WIDTH) / 3,
            resizeMode: 'contain',
            position: 'absolute',
            alignSelf: 'center',
            top: (2 * SCREEN_HEIGHT) / 14,
          }}
        />
      ) : (
        <Score
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: SCREEN_HEIGHT / 10,
            position: 'absolute',
            flexDirection: 'row',
            alignSelf: 'center',
            height: 2 * BIRD_HEIGHT,
            width: PIPE_WIDTH,
          }}
        />
      )}
      <Bird />
      <TouchableWithoutFeedback
        style={{position: 'absolute', flex: 1}}
        onPress={touchScreen}>
        <View
          style={{
            opacity: 4,
            flex: 1,
          }}
        />
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
export default Game;
