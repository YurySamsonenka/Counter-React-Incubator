import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { counterReducer } from '../model/counter-reducer';
import { loadState, saveState } from '../utils/localstorage-utils';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export const store = createStore(rootReducer, loadState());
export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
	saveState(store.getState())
	// localStorage.setItem('app-state', JSON.stringify(store.getState()));
});

// @ts-ignore
window.store = store;
