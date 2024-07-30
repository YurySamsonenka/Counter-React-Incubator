import React from 'react';
import './CounterDisplay.style.css';
import { Button } from '../button/Button';

export type CounterPropsType = {
	counterId: string
	startValue: number
	endValue: number
	startValueFromInput: number
	endValueFromInput: number
	currentValue: number
	increment: (counterId: string, prevValue: number) => void
	resetIncrement: (counterId: string) => void
}

export const CounterDisplay = ({
	counterId,
	startValue,
	endValue,
	startValueFromInput,
	endValueFromInput,
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

	const checks = [startValueFromInput < 0,
		startValueFromInput > endValueFromInput - 1,
		startValueFromInput !== startValue,
		endValueFromInput !== endValue];

	return (
		<div className={'counter-display'}>
			<div className={`${currentValue >= endValue
				? 'final-value'
				: ''} display`}>{currentValue}</div>
			<div className={'btn-block'}>
				{checks[0] || checks[1]
					? <div className={'message message_warning'}>Incorrect value!</div>
					: checks[2] || checks[3]
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
