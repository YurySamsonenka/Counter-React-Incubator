export type StateType = {
	startValue: number
	endValue: number
	currentValue: number
	startInputValue: number
	endInputValue: number
}

type ActionsType = IncrementCounterActionType | ResetCounterActionType | SetCounterSettingType

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
		endInputValue: number
		currentValue: number

	}
}

const initialState: StateType = {
	startValue: 4,
	endValue: 10,
	currentValue: 4,
	startInputValue: 4,
	endInputValue: 10,
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
				startValue: action.payload.startInputValue,
				endValue: action.payload.endInputValue,
				currentValue: action.payload.startInputValue,
			};
		}
		default:
			debugger
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
	return { type: 'SET-COUNTER-SETTING', payload: { startInputValue, endInputValue, currentValue } };
};
