import React, { useState } from 'react';
import './CounterSetting.style.css';
import { Button } from '../button/Button';

export type CounterSettingPropsType = {
	counterId: string
	startValue: number
	endValue: number
	setCounterSettings: (counterId: string, startValue: number, endValue: number) => void
}

export const CounterSetting = ({
	counterId,
	startValue,
	endValue,
	setCounterSettings,
}: CounterSettingPropsType) => {

	// const isIncDisabled = currentValue >= endValue;
	// const isResetDisabled = currentValue === startValue;

	const [initValue, setInitValue] = useState(startValue);
	const [maxValue, setMaxValue] = useState(endValue);
	console.log(counterId);

	const [error, setError] = useState<boolean>(false);

	const onChangeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMaxValue(+e.currentTarget.value);
	};
	const onChangeEndValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInitValue(+e.currentTarget.value);
	};

	return (
		<div className={'counter'}>
			<div className={`display-setting`}>
				{error
					? 'тасок нет'
					: <div>
						<div>
							<label htmlFor="maxValue">max value:</label>
							<input value={maxValue} type={'number'} id={'maxValue'} onChange={onChangeStartValueHandler} />
						</div>
						<div>
							<label htmlFor="startValue">start value:</label>
							<input value={initValue} type={'number'} id={'startValue'} onChange={onChangeEndValueHandler} />
						</div>
					</div>}
			</div>
			<div className={'block'}>
				<Button title={'set'} onClick={() => {
					setCounterSettings(counterId, initValue, maxValue);
				}} />
			</div>
		</div>
	)
		;
};
