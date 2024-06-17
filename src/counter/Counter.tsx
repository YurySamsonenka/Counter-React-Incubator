import React, { useState } from 'react';
import './Counter.style.css';
import { Button } from '../button/Button';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const resetIncrement = () => {
    setCounter(0);
  };

  const isIncDisabled = counter >= 5;
  const isResetDisabled = counter === 0;

  const onClickIncrementHandler = () => {
    increment();
  };

  const onClickResetIncrementHandler = () => {
    resetIncrement();
  };

  return (
    <div className={'counter'}>
      <div className={`${counter >= 5 ? 'red' : ''} display`}>{counter}</div>
      <div className={'block'}>
        <Button title={'inc'} onClick={onClickIncrementHandler} disabled={isIncDisabled} />
        <Button title={'reset'} onClick={onClickResetIncrementHandler} disabled={isResetDisabled} />
      </div>
    </div>
  )
    ;
};
