import { stateAppend } from './utility';

const createReducer = (initialState, clearAction, changeAction, ajaxActions) => (state = initialState, action) => {
	const { type, payload } = action;
	if (type === changeAction) {
		return Object.assign({}, state, payload);
	}

	if (type === clearAction) {
		return initialState;
	}

	for (let i = 0; i < ajaxActions.length; i += 1) {
		if (type === ajaxActions[i]) {
			const { append, data } = payload;
			return append ? stateAppend(append, data, state) : { ...state, ...data };
		}
	}

	return state;
};

export default createReducer;
