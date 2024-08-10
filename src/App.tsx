import './App.css';
import React, { useState } from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';

function App() {
	const [startValue, setStartValue] = useState(5);
	const [maxValue, setMaxValue] = useState(10);
	const [currentValue, setCurrentValue] = useState(5);
	const [startInputValue, setStartInputValue] = useState(5);
	const [maxInputValue, setMaxInputValue] = useState(10);

	const increment = () => {
		setCurrentValue(prevState => prevState + 1);
	};

	const resetIncrement = () => {
		setCurrentValue(startValue);
	};

	const onChangeStartInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStartInputValue(+e.currentTarget.value);
	};

	const onChangeMaxInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMaxInputValue(+e.currentTarget.value);
	};

	const setCounterSetting = (startValue: number, endValue: number) => {
		setStartValue(startValue);
		setMaxValue(endValue);
		setCurrentValue(startValue);
	};

	return (
		<div className="App">
			<div className={'counter'}>
				<CounterDisplay
					startValue={startValue}
					maxValue={maxValue}
					startInputValue={startInputValue}
					maxInputValue={maxInputValue}
					currentValue={currentValue}
					increment={increment}
					resetIncrement={resetIncrement}
				/>
				<CounterSetting
					startValue={startValue}
					maxValue={maxValue}
					startInputValue={startInputValue}
					maxInputValue={maxInputValue}
					onChangeStartInputValue={onChangeStartInputValue}
					onChangeMaxInputValue={onChangeMaxInputValue}
					setCounterSetting={setCounterSetting}
				/>
			</div>
		</div>
	);
}

export default App;
