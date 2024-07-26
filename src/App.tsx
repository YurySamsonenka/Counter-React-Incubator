import './App.css';
import React, { useState } from 'react';
import { v1 } from 'uuid';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';

function App() {
	type CounterConfigType = {
		counterId: string
		startValue: number
		endValue: number,
	}

	type CurrentValueType = {
		[counterId: string]: number
	}

	type trackingChangesInInputValuesType = {
		[counterId: string]: InputValuesType
	}

	type InputValuesType = {
		startValue: number
		endValue: number
	}

	//TODO: сделать localStorage c id через v1()

	const [countersConfig, setCountersConfig] = useState<Array<CounterConfigType>>([
		{ counterId: 'asdfasdfsadfasd', startValue: 5, endValue: 10 },
		{ counterId: 'asdfasdfasdfxzczxc', startValue: 3, endValue: 6 },
	]);

	const currentCounterValuesCreator = countersConfig.reduce<Record<string, number>>((acc,
		curr): CurrentValueType => {
		acc[curr.counterId] = curr.startValue;
		return acc;
	}, {});

	const [currentCounterValues, setCurrentCounterValues] = useState(currentCounterValuesCreator);

	const trackingChangesInInputValuesCreator = countersConfig.reduce<Record<string, InputValuesType>>(
		(acc,
			curr): trackingChangesInInputValuesType => {
			acc[curr.counterId] = {
				startValue: curr.startValue,
				endValue: curr.endValue,
			};
			return acc;
		},
		{});

	const [trackingChangesInInputValues, setTrackingChangesInInputValues] = useState<trackingChangesInInputValuesType>(
		trackingChangesInInputValuesCreator);

	const increment = (counterId: string) => {
		setCurrentCounterValues({
			...currentCounterValues,
			[counterId]: currentCounterValues[counterId] + 1,
		});
	};

	const resetIncrement = (counterId: string) => {
		const configForCounter = countersConfig.find(c => c.counterId === counterId);
		if (configForCounter) {
			setCurrentCounterValues({
				...currentCounterValues,
				[counterId]: configForCounter?.startValue,
			});
		}
	};

	const onChangeStartValueSetting = (e: React.ChangeEvent<HTMLInputElement>, counterId: string) => {
		setTrackingChangesInInputValues({
			...trackingChangesInInputValues,
			[counterId]: {
				...trackingChangesInInputValues[counterId],
				startValue: +e.currentTarget.value,
			},
		});
	};

	const onChangeEndValueSetting = (e: React.ChangeEvent<HTMLInputElement>, counterId: string) => {
		setTrackingChangesInInputValues({
			...trackingChangesInInputValues,
			[counterId]: {
				...trackingChangesInInputValues[counterId],
				endValue: +e.currentTarget.value,
			},
		});
	};

	const setCounterSettings = (counterId: string, startValue: number, endValue: number) => {
		setCountersConfig(countersConfig.map(c => c.counterId === counterId ? {
			...c,
			startValue,
			endValue,
		} : c));
		setCurrentCounterValues({ ...currentCounterValues, [counterId]: startValue });
	};

	return (
		<div className="App">
			{countersConfig.map(c => {
				return (<div key={c.counterId} className={'counter'}>
					<CounterDisplay
						counterId={c.counterId}
						startValue={c.startValue}
						endValue={c.endValue}
						currentValue={currentCounterValues[c.counterId]}
						increment={increment}
						resetIncrement={resetIncrement}
						startValueFromInput = {trackingChangesInInputValues[c.counterId].startValue}
						endValueFromInput = {trackingChangesInInputValues[c.counterId].endValue}
					/>
					<CounterSetting counterId={c.counterId}
						startValue={c.startValue}
						endValue={c.endValue}
						startValueFromInput={trackingChangesInInputValues[c.counterId].startValue}
						endValueFromInput = {trackingChangesInInputValues[c.counterId].endValue}
						setCounterSettings={setCounterSettings}
						onChangeStartValueSetting={onChangeStartValueSetting}
						onChangeEndValueSetting={onChangeEndValueSetting}
					/>
				</div>);
			})}
		</div>
	);
}

export default App;
