import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const resetIncrement = () => {
    setCounter(0);
  };

  const isIncDisabled = counter >= 5;
  const isResetDisabled = counter === 0;

  return (
    <div className="App">
      <div className={counter >= 5 ? 'red' : ''}>{counter}</div>
      <div className={'block'}>
        <button onClick={() => increment()} disabled={isIncDisabled}>inc</button>
        <button onClick={() => resetIncrement()} disabled={isResetDisabled}>reset</button>
      </div>
    </div>
  );
}

export default App;
