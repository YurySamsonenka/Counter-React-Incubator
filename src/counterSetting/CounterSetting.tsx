import React, { useEffect } from 'react';
import './CounterSetting.style.css';
import { Button } from '../button/Button';

export type CounterSettingPropsType = {
	counterId: string
	startValue: number
	endValue: number
	startValueFromInput: number
	endValueFromInput: number
	onChangeStartValueSetting: (e: React.ChangeEvent<HTMLInputElement>, counterId: string) => void
	onChangeEndValueSetting: (e: React.ChangeEvent<HTMLInputElement>, counterId: string) => void
	setCounterSettings: (counterId: string, startValue: number, endValue: number) => void
}

export const CounterSetting = ({
	counterId,
	startValue,
	endValue,
	startValueFromInput,
	endValueFromInput,
	onChangeStartValueSetting,
	onChangeEndValueSetting,
	setCounterSettings,
}: CounterSettingPropsType) => {

	const onChangeStartValueSettingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeStartValueSetting(
			e,
			counterId);
	};

	const onChangeEndValueSettingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeEndValueSetting(
			e,
			counterId);
	};

	const setCounterSettingsHandler = () => {
		setCounterSettings(counterId, startValueFromInput, endValueFromInput);
	};

	useEffect(() => {
		const counterLocalStorage = localStorage.getItem(counterId);

		if (counterLocalStorage) {
			localStorage.setItem(counterId,
				JSON.stringify({
					...JSON.parse(counterLocalStorage),
					startValue: startValue,
					endValue: endValue,
				}));
		}

	}, [counterId, startValue, endValue]);

	const checks = [startValueFromInput < 0,
		startValueFromInput > endValueFromInput - 1,
		startValue === startValueFromInput,
		endValue === endValueFromInput];

	return (
		<div className={'counter-display'}>
			<div className={`setting`}>
				<div>
					<label htmlFor="maxValue">max value:</label>
					<input value={endValueFromInput}
						type={'number'}
						id={'maxValue'}
						className={`setting-input ${checks[1]
							? 'warning'
							: ''}`}
						onChange={onChangeEndValueSettingHandler} />
				</div>
				<div>
					<label htmlFor="startValue">start value:</label>
					<input value={startValueFromInput}
						type={'number'}
						id={'startValue'}
						className={`setting-input ${checks[0] || checks[1] ? 'warning' : ''}`}
						onChange={onChangeStartValueSettingHandler} />
				</div>
			</div>
			<div className={'btn-block'}>
				<Button title={'set'}
					onClick={setCounterSettingsHandler}
					disabled={checks[0] || checks[1] ||
						(checks[2] && checks[3])} />
			</div>
		</div>
	)
		;
};
