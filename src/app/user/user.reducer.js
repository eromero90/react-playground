const initialUserState = {
	fetching: false,
	fetched: false,
	user: {},
	error: null
};

function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	}
}

/*export const userReducer = (state = initialUserState, {type, payload, ...action}) => {
	console.log('userReducer=> ', type);
	switch(type) {
		case 'FETCH_USER_START': {
			state = {...state, fetched: false, fetching: payload};
			break;
		}
		case 'RECEIVE_USER': {
			state = {...state, fetched: true, fetching: false, user: payload};
			break;
		}
		case 'FETCH_USER_ERROR': {
			state = {...state, fetched: false, fetching: false, error: payload};
			break;
		}
	}
	return state;
};*/

export const userReducer = createReducer(initialUserState, {
  ['RECEIVE_USER'](state, {type, payload, ...action}) {
  	console.log('userReducer=> ', type);
    return {...state, fetched: true, fetching: false, user: payload};
  }
});
