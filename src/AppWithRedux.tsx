import './App.css';
import React, { useCallback } from 'react';
import { CounterDisplay } from './counterDisplay/CounterDisplay';
import { CounterSetting } from './counterSetting/CounterSetting';
import { IncrementCounterActionCreator, ResetCounterActionCreator, SetCounterMaxValueActionCreator, SetCounterStartValueActionCreator, SetCounterSettingActionCreator, StateType } from './model/counter-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './state/store';

function App() {
	const counter = useSelector<AppRootStateType, StateType>(state => state.counter);
	const dispatch = useDispatch()

	const increment = useCallback(() => {
		dispatch(IncrementCounterActionCreator());
	}, [dispatch]);

	const resetIncrement = useCallback(() => {
		dispatch(ResetCounterActionCreator());
	}, [dispatch]);

	const onChangeStartInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(SetCounterStartValueActionCreator(+e.currentTarget.value))
	}, [dispatch]);

	const onChangeEndInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(SetCounterMaxValueActionCreator(+e.currentTarget.value))
	}, [dispatch]);

	const setCounterSetting = useCallback((startValue: number, endValue: number) => {
		dispatch(SetCounterSettingActionCreator(startValue, endValue, counter.currentValue));
	}, [dispatch]);

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
