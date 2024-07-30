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

	const counterId1 = v1();
	const counterId2 = v1();

	const [countersConfig, setCountersConfig] = useState<Array<CounterConfigType>>([
		{ counterId: counterId1, startValue: 5, endValue: 10 },
		{ counterId: counterId2, startValue: 3, endValue: 6 },
	]);

	const [currentCounterValues, setCurrentCounterValues] = useState({
		[counterId1]: countersConfig[0].startValue,
		[counterId2]: countersConfig[1].startValue,
	});

	const [trackingChangesInInputValues, setTrackingChangesInInputValues] = useState<trackingChangesInInputValuesType>(
		{
			[counterId1]: {
				startValue: countersConfig[0].startValue,
				endValue: countersConfig[0].endValue,
			},
			[counterId2]: {
				startValue: countersConfig[1].startValue,
				endValue: countersConfig[1].endValue,
			},
		});

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
