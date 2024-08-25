export type StateType = {
	startValue: number
	maxValue: number
	currentValue: number
	startInputValue: number
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
		startInputValue: number
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
		startInputValue: number,
	}
}

type ActionsType =
	IncrementCounterActionType
	| ResetCounterActionType
	| SetCounterSettingType
	| SetCounterMaxValueType
	| SetCounterMinValueType

const START_VALUE = 5;
const MAX_VALUE = 11;
const CURRENT_VALUE = START_VALUE;
const START_INPUT_VALUE = START_VALUE;
const MAX_INPUT_VALUE = MAX_VALUE;

export const initialState: StateType = {
	startValue: START_VALUE,
	maxValue: MAX_VALUE,
	currentValue: CURRENT_VALUE,
	startInputValue: START_INPUT_VALUE,
	maxInputValue: MAX_INPUT_VALUE,
};

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
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
				startValue: action.payload.startInputValue,
				maxValue: action.payload.maxInputValue,
				currentValue: action.payload.startInputValue,
			};
		}
		case 'SET-COUNTER-MAX-VALUE': {
			return {
				...state,
				maxInputValue: action.payload.maxInputValue,
			};
		}
		case 'SET-COUNTER-MIN-VALUE': {
			return {
				...state,
				startInputValue: action.payload.startInputValue,
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
	maxInputValue: number,
	currentValue: number): SetCounterSettingType => {
	return {
		type: 'SET-COUNTER-SETTING',
		payload: { startInputValue, maxInputValue, currentValue },
	};
};

export const SetCounterMaxValueActionCreator = (maxInputValue: number): SetCounterMaxValueType => {
	return {
		type: 'SET-COUNTER-MAX-VALUE',
		payload: { maxInputValue },
	};
};

export const SetCounterStartValueActionCreator = (startInputValue: number): SetCounterMinValueType => {
	return {
		type: 'SET-COUNTER-MIN-VALUE',
		payload: { startInputValue },
	};
};
