import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './counter/Counter';

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
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
