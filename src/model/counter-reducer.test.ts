import { counterReducer, IncrementCounterActionCreator, ResetCounterActionCreator, SetCounterSettingActionCreator, StateType } from './counter-reducer';

test('increment counter', () => {
	const startState: StateType = {
		startValue: 5,
		maxValue: 10,
		currentValue: 5,
		startInputValue: 5,
		maxInputValue: 10,
	};

	const endState = counterReducer(startState, IncrementCounterActionCreator());

	expect(endState.currentValue).toBe(6);
});

test('reset counter', () => {
	const startState: StateType = {
		startValue: 5,
		maxValue: 10,
		currentValue: 8,
		startInputValue: 5,
		maxInputValue: 10,
	};

	const endState = counterReducer(startState, ResetCounterActionCreator());

	expect(endState.startValue).toBe(5);
});

test('set counter setting', () => {
	const startState: any = {
		startValue: 5,
		endValue: 10,
		currentValue: 8,
		minInputValue: 3,
		maxInputValue: 15,
	};

	const endState = counterReducer(startState, SetCounterSettingActionCreator(startState?.minInputValue,startState.maxInputValue, startState.minInputValue));

	expect(endState.startValue).toBe(3);
	expect(endState.maxValue).toBe(15);
	expect(endState.currentValue).toBe(3);
});
