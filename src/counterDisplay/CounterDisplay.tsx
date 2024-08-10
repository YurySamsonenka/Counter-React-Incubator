import React, { useCallback } from 'react';
import './CounterDisplay.style.css';
import { Button } from '../button/Button';

export type CounterPropsType = {
	startValue: number
	maxValue: number
	startInputValue: number
	maxInputValue: number
	currentValue: number
	increment: () => void
	resetIncrement: () => void
}

export const CounterDisplay = (({
	startValue,
	maxValue,
	startInputValue,
	maxInputValue,
	currentValue,
	increment,
	resetIncrement,
}: CounterPropsType) => {
	const isIncDisabled = currentValue >= maxValue;
	const isResetDisabled = currentValue === startValue;

	const onClickIncrementHandler = useCallback(() => {
		increment();
	}, [increment]);

	const onClickResetIncrementHandler = useCallback(() => {
		resetIncrement();
	}, [resetIncrement]);

	// const checks = [startInputValue < 0,
	// 	startInputValue > endInputValue - 1,
	// 	startInputValue !== startValue,
	// 	endInputValue !== endValue];

	return (
		<div className={'counter-display'}>
			<div className={`${currentValue >= maxValue
				? 'final-value'
				: ''} display`}>{currentValue}</div>
			<div className={'btn-block'}>
				{startInputValue < 0 || startInputValue > maxInputValue - 1
					? <div className={'message message_warning'}>Incorrect value!</div>
					: startInputValue !== startValue || maxInputValue !== maxValue
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
});
