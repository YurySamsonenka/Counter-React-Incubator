import React from 'react';
import './CounterSetting.style.css';
import { Button } from '../button/Button';

export type CounterSettingPropsType = {
	startValue: number
	endValue: number
	startInputValue: number
	endInputValue: number
	onChangeStartInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	onChangeEndInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	setCounterSetting: (startValue: number, endValue: number) => void
}

export const CounterSetting = ({
	startValue,
	endValue,
	startInputValue,
	endInputValue,
	onChangeStartInputValue,
	onChangeEndInputValue,
	setCounterSetting,
}: CounterSettingPropsType) => {

	const onChangeStartInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeStartInputValue(e);
	}

	const onChangeEndInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeEndInputValue(e);
	}

	const setCounterSettingHandler = () => {
		setCounterSetting(startInputValue, endInputValue);
	};

	// const checks = [startInputValue < 0,
	// 	startInputValue > endInputValue - 1,
	// 	startValue === startInputValue,
	// 	endValue === endInputValue];

	return (
		<div className={'counter-display'}>
			<div className={`setting`}>
				<div>
					<label htmlFor="maxValue">max value:</label>
					<input value={endInputValue}
						type={'number'}
						id={'maxValue'}
						className={`setting-input ${startInputValue > endInputValue - 1
							? 'warning'
							: ''}`}
						onChange={onChangeEndInputValueHandler} />
				</div>
				<div>
					<label htmlFor="startValue">start value:</label>
					<input value={startInputValue}
						type={'number'}
						id={'startValue'}
						className={`setting-input ${startInputValue < 0 || startInputValue > endInputValue - 1 ? 'warning' : ''}`}
						onChange={onChangeStartInputValueHandler} />
				</div>
			</div>
			<div className={'btn-block'}>
				<Button title={'set'}
					onClick={setCounterSettingHandler}
					disabled={startInputValue < 0 || startInputValue > endInputValue - 1 ||
						(startValue === startInputValue && endValue === endInputValue)} />
			</div>
		</div>
	)
		;
};
