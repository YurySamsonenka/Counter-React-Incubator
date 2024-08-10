import './App.css';
import React from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';
import { IncrementCounterActionCreator, ResetCounterActionCreator, SetCounterMaxValueActionCreator, SetCounterStartValueActionCreator, SetCounterSettingActionCreator, StateType } from './model/counter-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './state/store';

function App() {
	const counter = useSelector<AppRootStateType, StateType>(state => state.counter);
	const dispatch = useDispatch()

	const increment = () => {
		dispatch(IncrementCounterActionCreator());
	};

	const resetIncrement = () => {
		dispatch(ResetCounterActionCreator());
	};

	const onChangeStartInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(SetCounterStartValueActionCreator(+e.currentTarget.value))
	};

	const onChangeEndInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(SetCounterMaxValueActionCreator(+e.currentTarget.value))
	};

	const setCounterSetting = (startValue: number, endValue: number) => {
		dispatch(SetCounterSettingActionCreator(startValue, endValue, counter.currentValue));
	};

	return (
		<div className="App">
			<div className={'counter'}>
				<CounterDisplay
					startValue={counter.startValue}
					maxValue={counter.maxValue}
					startInputValue={counter.startInputValue}
					maxInputValue={counter.maxInputValue}
					currentValue={counter.currentValue}
					increment={increment}
					resetIncrement={resetIncrement}
				/>
				<CounterSetting
					startValue={counter.startValue}
					maxValue={counter.maxValue}
					startInputValue={counter.startInputValue}
					maxInputValue={counter.maxInputValue}
					onChangeStartInputValue={onChangeStartInputValue}
					onChangeMaxInputValue={onChangeEndInputValue}
					setCounterSetting={setCounterSetting}
				/>
			</div>
		</div>
	);
}

export default App;
