import { counterReducer, IncrementCounterActionCreator, ResetCounterActionCreator, SetCounterSettingActionCreator, StateType } from './counter-reducer';

test('increment counter', () => {
	const startState: StateType = {
		startValue: 5,
		endValue: 10,
		currentValue: 5,
		startInputValue: 5,
		endInputValue: 10,
	};

	// const action: IncrementCounterActionType = {
	// 	type: 'INCREMENT-COUNTER',
	// };

	const endState = counterReducer(startState, IncrementCounterActionCreator());

	expect(endState.currentValue).toBe(6);
});

test('reset counter', () => {
	const startState: StateType = {
		startValue: 5,
		endValue: 10,
		currentValue: 8,
		startInputValue: 5,
		endInputValue: 10,
	};

	// const action: ResetCounterActionType = {
	// 	type: 'RESET-COUNTER',
	// } as const;

	const endState = counterReducer(startState, ResetCounterActionCreator());

	expect(endState.startValue).toBe(5);
});

test('set counter setting', () => {
	const startState: StateType = {
		startValue: 5,
		endValue: 10,
		currentValue: 8,
		startInputValue: 3,
		endInputValue: 15,
	};

	// const action: SetCounterSettingType = {
	// 	type: 'SET-COUNTER-SETTING',
	// 	payload: {
	// 		startInputValue: startState.startInputValue,
	// 		endInputValue: startState.endInputValue,
	// 		currentValue: startState.startInputValue
	// 	},
	// };

	const endState = counterReducer(startState, SetCounterSettingActionCreator(startState.startInputValue,startState.endInputValue, startState.startInputValue));

	expect(endState.startValue).toBe(3);
	expect(endState.endValue).toBe(15);
	expect(endState.currentValue).toBe(3);
});
