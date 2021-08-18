import React, {useContext, useMemo} from 'react';
import {Image, Text, View} from 'react-native';
import context from '../context/context';
import {BIRD_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH} from '../context/constants';
const Score = ({style}) => {
  const {score} = useContext(context);
  const renScore = useMemo(() => {
    let src;
    let scoreArr = [...score.toString()].map((value, index) => {
      switch (value) {
        case '1':
          src = require('../../assets/sprites/1.png');
          break;
        case '2':
          src = require('../../assets/sprites/2.png');
          break;
        case '3':
          src = require('../../assets/sprites/3.png');
          break;
        case '4':
          src = require('../../assets/sprites/4.png');
          break;
        case '5':
          src = require('../../assets/sprites/5.png');
          break;
        case '6':
          src = require('../../assets/sprites/6.png');
          break;
        case '7':
          src = require('../../assets/sprites/7.png');
          break;
        case '8':
          src = require('../../assets/sprites/8.png');
          break;
        case '9':
          src = require('../../assets/sprites/9.png');
        default:
          src = require('../../assets/sprites/0.png');
          break;
      }
      return (
        <Image
          key={index}
          source={src}
          style={{height: BIRD_HEIGHT, marginLeft: index === 0 ? 0 : 2}}
        />
      );
    });
    return scoreArr;
  }, [score]);
  return <View style={style}>{renScore}</View>;
};
export default Score;
