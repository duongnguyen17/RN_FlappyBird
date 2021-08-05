import React from 'react';
import Globalstate from './src/context/GlobalState';
import Game from './src/screens/Game';

const App = () => {
  return (
    <Globalstate>
      <Game />
    </Globalstate>
  );
};

export default App;
