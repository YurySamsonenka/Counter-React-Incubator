import React from 'react';
import './CounterDisplay.style.css';
import { Button } from '../button/Button';

export type CounterPropsType = {
	startValue: number
	endValue: number
	startInputValue: number
	endInputValue: number
	currentValue: number
	increment: () => void
	resetIncrement: () => void
}

export const CounterDisplay = ({
	startValue,
	endValue,
	startInputValue,
	endInputValue,
	currentValue,
	increment,
	resetIncrement,
}: CounterPropsType) => {
	const isIncDisabled = currentValue >= endValue;
	const isResetDisabled = currentValue === startValue;

	const onClickIncrementHandler = () => {
		increment();
	};

	const onClickResetIncrementHandler = () => {
		resetIncrement();
	};

	// const checks = [startInputValue < 0,
	// 	startInputValue > endInputValue - 1,
	// 	startInputValue !== startValue,
	// 	endInputValue !== endValue];

	return (
		<div className={'counter-display'}>
			<div className={`${currentValue >= endValue
				? 'final-value'
				: ''} display`}>{currentValue}</div>
			<div className={'btn-block'}>
				{startInputValue < 0 || startInputValue > endInputValue - 1
					? <div className={'message message_warning'}>Incorrect value!</div>
					: startInputValue !== startValue || endInputValue !== endValue
						? <div className={'message'}>enter value and press 'set'</div>
						: <>
							<Button title={'inc'} onClick={onClickIncrementHandler} disabled={isIncDisabled} />
							<Button title={'reset'}
								onClick={onClickResetIncrementHandler}
								disabled={isResetDisabled} />
						</>
				}
			</div>
		</div>
	)
		;
};
