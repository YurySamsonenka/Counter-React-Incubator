import React from 'react';
import './Counter.style.css';
import { Button } from '../button/Button';

export type CounterPropsType = {
	counterId: string
	startValue: number
	endValue: number
	currentValue: number
	increment: (counterId: string, prevValue: number) => void
	resetIncrement: (counterId: string) => void
}

export const Counter = ({
	counterId,
	startValue,
	endValue,
	currentValue,
	increment,
	resetIncrement,
}: CounterPropsType) => {

	const isIncDisabled = currentValue >= endValue;
	const isResetDisabled = currentValue === startValue;

	const onClickIncrementHandler = () => {
		increment(counterId, startValue);
	};

	const onClickResetIncrementHandler = () => {
		resetIncrement(counterId);
	};

	return (
		<div className={'counter'}>
			<div className={`${currentValue >= endValue ? 'red' : ''} display`}>{currentValue}</div>
			<div className={'block'}>
				<Button title={'inc'} onClick={onClickIncrementHandler} disabled={isIncDisabled} />
				<Button title={'reset'} onClick={onClickResetIncrementHandler} disabled={isResetDisabled} />
			</div>
		</div>
	)
		;
};
