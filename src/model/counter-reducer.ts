export type StateType = {
	startValue: number
	endValue: number
	currentValue: number
	minInputValue: number
	maxInputValue: number
}

export type IncrementCounterActionType = {
	type: 'INCREMENT-COUNTER'
}

export type ResetCounterActionType = {
	type: 'RESET-COUNTER'
}

export type SetCounterSettingType = {
	type: 'SET-COUNTER-SETTING',
	payload: {
		minInputValue: number
		maxInputValue: number
		currentValue: number

	}
}

export type SetCounterMaxValueType = {
	type: 'SET-COUNTER-MAX-VALUE',
	payload: {
		maxInputValue: number,
	}
}

export type SetCounterMinValueType = {
	type: 'SET-COUNTER-MIN-VALUE',
	payload: {
		minInputValue: number,
	}
}

type ActionsType =
	IncrementCounterActionType
	| ResetCounterActionType
	| SetCounterSettingType
	| SetCounterMaxValueType
	| SetCounterMinValueType

const START_VALUE = 4;
const END_VALUE = 11;
const CURRENT_VALUE = START_VALUE;
const MIN_INPUT_VALUE = START_VALUE;
const MAX_INPUT_VALUE = END_VALUE;

export const initialState: StateType = {
	startValue: START_VALUE,
	endValue: END_VALUE,
	currentValue: CURRENT_VALUE,
	minInputValue: MIN_INPUT_VALUE,
	maxInputValue: MAX_INPUT_VALUE,
};

export const counterReducer = (state: StateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'INCREMENT-COUNTER': {
			return {
				...state, currentValue: state.currentValue + 1,
			};
		}
		case 'RESET-COUNTER': {
			return {
				...state, currentValue: state.startValue,
			};
		}
		case 'SET-COUNTER-SETTING': {
			return {
				...state,
				startValue: action.payload.minInputValue,
				endValue: action.payload.maxInputValue,
				currentValue: action.payload.minInputValue,
			};
		}
		case 'SET-COUNTER-MAX-VALUE': {
			console.log(action);
			return {
				...state,
				maxInputValue: action.payload.maxInputValue,
			};
		}
		case 'SET-COUNTER-MIN-VALUE': {
			return {
				...state,
				minInputValue: action.payload.minInputValue,
			};
		}
		default:
			return state;
	}
};

export const IncrementCounterActionCreator = (): IncrementCounterActionType => {
	return { type: 'INCREMENT-COUNTER' };
};

export const ResetCounterActionCreator = (): ResetCounterActionType => {
	return { type: 'RESET-COUNTER' };
};

export const SetCounterSettingActionCreator = (startInputValue: number,
	endInputValue: number,
	currentValue: number): SetCounterSettingType => {
	return {
		type: 'SET-COUNTER-SETTING',
		payload: { minInputValue: startInputValue, maxInputValue: endInputValue, currentValue },
	};
};

export const SetCounterMaxValueActionCreator = (endInputValue: number): SetCounterMaxValueType => {
	console.log(endInputValue);
	return {
		type: 'SET-COUNTER-MAX-VALUE',
		payload: { maxInputValue: endInputValue },
	};
};

export const SetCounterMinValueActionCreator = (startInputValue: number): SetCounterMinValueType => {
	return {
		type: 'SET-COUNTER-MIN-VALUE',
		payload: { minInputValue: startInputValue },
	};
};
