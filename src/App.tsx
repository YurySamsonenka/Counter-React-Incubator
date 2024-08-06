import './App.css';
import React, { useState } from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';

function App() {
	const [startValue, setStartValue] = useState(5);
	const [endValue, setEndValue] = useState(10);
	const [currentValue, setCurrentValue] = useState(5);
	const [startInputValue, setStartInputValue] = useState(5);
	const [endInputValue, setEndInputValue] = useState(10);

	const increment = () => {
		setCurrentValue(prevState => prevState + 1);
	};

	const resetIncrement = () => {
		setCurrentValue(startValue);
	};

	const onChangeStartInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStartInputValue(+e.currentTarget.value);
	};

	const onChangeEndInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEndInputValue(+e.currentTarget.value);
	};

	const setCounterSetting = (startValue: number, endValue: number) => {
		setStartValue(startValue);
		setEndValue(endValue);
		setCurrentValue(startValue);
	};

	return (
		<div className="App">
			<div className={'counter'}>
				<CounterDisplay
					startValue={startValue}
					endValue={endValue}
					startInputValue={startInputValue}
					endInputValue={endInputValue}
					currentValue={currentValue}
					increment={increment}
					resetIncrement={resetIncrement}
				/>
				<CounterSetting
					startValue={startValue}
					endValue={endValue}
					startInputValue={startInputValue}
					endInputValue={endInputValue}
					onChangeStartInputValue={onChangeStartInputValue}
					onChangeEndInputValue={onChangeEndInputValue}
					setCounterSetting={setCounterSetting}
				/>
			</div>
		</div>
	);
}

export default App;
