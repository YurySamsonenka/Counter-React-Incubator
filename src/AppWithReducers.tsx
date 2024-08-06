import './App.css';
import React, { useReducer, useState } from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';
import { counterReducer, IncrementCounterActionCreator, ResetCounterActionCreator, SetCounterSettingActionCreator } from './model/counter-reducer';

function App() {
	// const [startValue, dispatchToCounterStartValue] = useReducer(counterReducer, 5);
	// const [endValue, dispatchToCounterEndValue] = useReducer(counterReducer, 10);
	// const [currentValue, dispatchToCounterCurrentValue] = useReducer(counterReducer, 5);
	const [startInputValue, setStartInputValue] = useState(5);
	const [endInputValue, setEndInputValue] = useState(10);

	const [counter, dispatchToCounter] = useReducer(counterReducer, {
		startValue: 5,
		endValue: 10,
		currentValue: 5,
		startInputValue: 5,
		endInputValue: 10,
	});

	const increment = () => {
		dispatchToCounter(IncrementCounterActionCreator());
	};

	const resetIncrement = () => {
		dispatchToCounter(ResetCounterActionCreator());
	};

	const onChangeStartInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStartInputValue(+e.currentTarget.value);
	};

	const onChangeEndInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEndInputValue(+e.currentTarget.value);
	};

	const setCounterSetting = (startValue: number, endValue: number) => {
		dispatchToCounter(SetCounterSettingActionCreator(startValue, endValue, counter.currentValue));
	};

	return (
		<div className="App">
			<div className={'counter'}>
				<CounterDisplay
					startValue={counter.startValue}
					endValue={counter.endValue}
					startInputValue={startInputValue}
					endInputValue={endInputValue}
					currentValue={counter.currentValue}
					increment={increment}
					resetIncrement={resetIncrement}
				/>
				<CounterSetting
					startValue={counter.startValue}
					endValue={counter.endValue}
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
