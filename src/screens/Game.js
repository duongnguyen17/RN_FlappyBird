import React, {useContext, useCallback, useEffect} from 'react';
import {ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import context from '../context/context';
import {GAME, SCREEN_HEIGHT, SCREEN_WIDTH} from '../context/constants';
import Bird from '../components/Bird';
import Base from '../components/Base';
import Pipe from '../components/Pipe';

const Game = props => {
  const {gameState, stop, start, fly} = useContext(context);

  if (gameState === GAME.END) {
    stop();
  }

  const touchScreen = () => {
    fly();
    if (gameState !== GAME.PLAYING) {
      start();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={touchScreen}>
      <ImageBackground
        source={require('../../assets/sprites/background-day.png')}
        style={{flex: 1}}>
        {gameState === GAME.START ? (
          <TouchableWithoutFeedback onPress={touchScreen}>
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
          </TouchableWithoutFeedback>
        ) : null}
        <Bird />
        <Pipe />
        <Base />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default Game;
