//TODO: 1) Добавить тесты; 2) Добавить useMemo;

import './App.css';
import React, { useEffect, useState } from 'react';
import { v1 } from 'uuid';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';

export type CounterConfigType = {
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

function App() {

	//TODO: сделать localStorage c id через v1()

	const getCounterConfig = (id: string, defaultStart: number, defaultEnd: number) => {
		const counterLocalStorage = localStorage.getItem(id);
		if (counterLocalStorage) {
			const { startValue, endValue } = JSON.parse(counterLocalStorage);
			return { counterId: id, startValue, endValue };
		}
		return { counterId: id, startValue: defaultStart, endValue: defaultEnd };
	};

	const [countersConfig, setCountersConfig] = useState<Array<CounterConfigType>>(() => [
		getCounterConfig('abc', 6, 30),
		getCounterConfig('2bca', 3, 6),
		getCounterConfig('asdasd', 3, 15),
	]);

	useEffect(() => {
		countersConfig.forEach(c => {
			const counterLocalStorage = localStorage.getItem(c.counterId);

			if (counterLocalStorage) {
				const { startValue, endValue, currentValue } = JSON.parse(counterLocalStorage);
				localStorage.setItem(c.counterId,
					JSON.stringify({ startValue, endValue, currentValue }));
			} else {
				const { startValue, endValue } = c;
				localStorage.setItem(c.counterId,
					JSON.stringify({ startValue, endValue, currentValue: startValue }));
			}
		});
	}, []);

	const currentCounterValuesCreator = countersConfig.reduce<Record<string, number>>((acc,
		curr): CurrentValueType => {

		const counterLocalStorage = localStorage.getItem(curr.counterId);
		acc[curr.counterId] =
			counterLocalStorage ? JSON.parse(counterLocalStorage).currentValue : curr.startValue;

		return acc;

	}, {});

	const [currentCounterValues, setCurrentCounterValues] = useState(currentCounterValuesCreator);

	const trackingChangesInInputValuesCreator = countersConfig.reduce<Record<string, InputValuesType>>(
		(acc,
			curr): trackingChangesInInputValuesType => {

			const counterLocalStorage = localStorage.getItem(curr.counterId);

			acc[curr.counterId] = {
				startValue: counterLocalStorage
					? JSON.parse(counterLocalStorage).startValue
					: curr.startValue,
				endValue: counterLocalStorage ? JSON.parse(counterLocalStorage).endValue : curr.endValue,
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
				[counterId]: configForCounter.startValue,
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
						startValueFromInput={trackingChangesInInputValues[c.counterId].startValue}
						endValueFromInput={trackingChangesInInputValues[c.counterId].endValue}
						currentValue={currentCounterValues[c.counterId]}
						increment={increment}
						resetIncrement={resetIncrement}
					/>
					<CounterSetting
						counterId={c.counterId}
						startValue={c.startValue}
						endValue={c.endValue}
						startValueFromInput={trackingChangesInInputValues[c.counterId].startValue}
						endValueFromInput={trackingChangesInInputValues[c.counterId].endValue}
						onChangeStartValueSetting={onChangeStartValueSetting}
						onChangeEndValueSetting={onChangeEndValueSetting}
						setCounterSettings={setCounterSettings}
					/>
				</div>);
			})}
		</div>
	);
}

export default App;
