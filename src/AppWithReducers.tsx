import './App.css';
import React, { useReducer } from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';
import { counterReducer, IncrementCounterActionCreator, initialState, ResetCounterActionCreator, SetCounterMaxValueActionCreator, SetCounterMinValueActionCreator, SetCounterSettingActionCreator } from './model/counter-reducer';

function App() {
	const [counter, dispatchToCounter] = useReducer(counterReducer, initialState);

	const increment = () => {
		dispatchToCounter(IncrementCounterActionCreator());
	};

	const resetIncrement = () => {
		dispatchToCounter(ResetCounterActionCreator());
	};

	const onChangeStartInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatchToCounter(SetCounterMinValueActionCreator(+e.currentTarget.value))
	};

	const onChangeEndInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatchToCounter(SetCounterMaxValueActionCreator(+e.currentTarget.value))
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
					startInputValue={counter.minInputValue}
					endInputValue={counter.maxInputValue}
					currentValue={counter.currentValue}
					increment={increment}
					resetIncrement={resetIncrement}
				/>
				<CounterSetting
					startValue={counter.startValue}
					endValue={counter.endValue}
					startInputValue={counter.minInputValue}
					endInputValue={counter.maxInputValue}
					onChangeStartInputValue={onChangeStartInputValue}
					onChangeEndInputValue={onChangeEndInputValue}
					setCounterSetting={setCounterSetting}
				/>
			</div>
		</div>
	);
}

export default App;
