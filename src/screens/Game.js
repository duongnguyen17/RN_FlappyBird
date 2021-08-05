import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
const Game = props => {
  const [num, setNum] = useState(1);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setNum(num => num + 1);
      }}>
      <SafeAreaView style={{flex: 1}}>
        <Text>{num}</Text>
        <Button
          title="reduce"
          onPress={() => {
            setNum(num => num - 1);
          }}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default Game;
