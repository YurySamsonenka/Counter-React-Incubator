import './App.css';
import React from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';
import { IncrementCounterActionCreator, ResetCounterActionCreator, SetCounterMaxValueActionCreator, SetCounterMinValueActionCreator, SetCounterSettingActionCreator, StateType } from './model/counter-reducer';
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
		dispatch(SetCounterMinValueActionCreator(+e.currentTarget.value))
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
