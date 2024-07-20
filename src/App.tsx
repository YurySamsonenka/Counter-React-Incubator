import React, { useState } from 'react';
import './App.css';
import { Counter, CounterPropsType } from './counter/Counter';
import { v1 } from 'uuid';

function App() {
	type CounterConfigType = {
		counterId: string
		startValue: number
		endValue: number
	}

	type CurrentValueType = {
		[counterId: string]: number
	}

	const [countersConfig, setCountersConfig] = useState<Array<CounterConfigType>>([
		{ counterId: v1(), startValue: 5, endValue: 10 },
		{ counterId: v1(), startValue: 1, endValue: 7 },
	]);

	const currentValuesCreator = countersConfig.reduce<Record<string, number>>((acc, curr): CurrentValueType => {
		acc[curr.counterId] = curr.startValue;
		return acc;
	}, {});

	const [currentValues, setCurrentValues] = useState(currentValuesCreator);

	const increment = (counterId: string) => {
		setCurrentValues({ ...currentValues, [counterId]: currentValues[counterId] + 1 });
	};

	const resetIncrement = (counterId: string) => {
		const configForCounter = countersConfig.find(c => c.counterId === counterId);
		if (configForCounter) {
			setCurrentValues({ ...currentValues, [counterId]: configForCounter?.startValue });
		}
	};

	return (
		<div className="App">
			{countersConfig.map(c => {
				return (<Counter
					key={c.counterId}
					counterId={c.counterId}
					startValue={c.startValue}
					endValue={c.endValue}
					currentValue={currentValues[c.counterId]}
					increment={increment}
					resetIncrement={resetIncrement} />);
			})}
		</div>
	);
}

export default App;
