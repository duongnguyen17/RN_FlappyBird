import React, {memo, useContext, useMemo} from 'react';
import {Image, View} from 'react-native';
import {
  COUNT_0,
  COUNT_1,
  COUNT_2,
  COUNT_3,
  COUNT_4,
  COUNT_5,
  COUNT_6,
  COUNT_7,
  COUNT_8,
  COUNT_9,
} from '../common';
import {BIRD_HEIGHT} from '../context/constants';
import context from '../context/context';
const Score = memo(({style}) => {
  const {score} = useContext(context);
  const renScore = useMemo(() => {
    let src;
    let scoreArr = [...score.toString()].map((value, index) => {
      switch (value) {
        case '1':
          src = COUNT_1;
          break;
        case '2':
          src = COUNT_2;
          break;
        case '3':
          src = COUNT_3;
          break;
        case '4':
          src = COUNT_4;
          break;
        case '5':
          src = COUNT_5;
          break;
        case '6':
          src = COUNT_6;
          break;
        case '7':
          src = COUNT_7;
          break;
        case '8':
          src = COUNT_8;
          break;
        case '9':
          src = COUNT_9;
        default:
          src = COUNT_0;
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
});
export default Score;
