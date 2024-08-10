import React, { memo, useCallback } from 'react';
import './CounterSetting.style.css';
import { Button } from '../button/Button';

export type CounterSettingPropsType = {
	startValue: number
	maxValue: number
	startInputValue: number
	maxInputValue: number
	onChangeStartInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	onChangeMaxInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	setCounterSetting: (startValue: number, endValue: number) => void
}

export const CounterSetting = memo(({
	startValue,
	maxValue,
	startInputValue,
	maxInputValue,
	onChangeStartInputValue,
	onChangeMaxInputValue,
	setCounterSetting,
}: CounterSettingPropsType) => {

	const onChangeStartInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeStartInputValue(e);
	};

	const onChangeMaxInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeMaxInputValue(e);
	};

	const setCounterSettingHandler = useCallback(() => {
		setCounterSetting(startInputValue, maxInputValue);
	}, [setCounterSetting, startInputValue, maxInputValue]);

	// const checks = [startInputValue < 0,
	// 	startInputValue > endInputValue - 1,
	// 	startValue === startInputValue,
	// 	endValue === endInputValue];

	return (
		<div className={'counter-display'}>
			<div className={`setting`}>
				<div>
					<label htmlFor="maxValue">max value:</label>
					<input value={maxInputValue}
						type={'number'}
						id={'maxValue'}
						className={`setting-input ${startInputValue > maxInputValue - 1
							? 'warning'
							: ''}`}
						onChange={onChangeMaxInputValueHandler} />
				</div>
				<div>
					<label htmlFor="startValue">start value:</label>
					<input value={startInputValue}
						type={'number'}
						id={'startValue'}
						className={`setting-input ${startInputValue < 0 || startInputValue > maxInputValue - 1
							? 'warning'
							: ''}`}
						onChange={onChangeStartInputValueHandler} />
				</div>
			</div>
			<div className={'btn-block'}>
				<Button title={'set'}
					onClick={setCounterSettingHandler}
					disabled={startInputValue < 0 || startInputValue > maxInputValue - 1 ||
						(startValue === startInputValue && maxValue === maxInputValue)} />
			</div>
		</div>
	)
		;
});
