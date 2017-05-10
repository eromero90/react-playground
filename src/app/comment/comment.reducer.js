const initialCommentState = {
	fetching: false,
	fetched: false,
	comments: [],
	error: null
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

/*export const commentsReducer = (state = initialCommentState, {type, payload, ...action}) => {
	console.log('commentsReducer=> ', type);
	switch(type) {
		case 'FETCH_COMMENTS_START': {
			state = {...state, fetched: false, fetching: payload};
			break;
		}
		case 'RECEIVE_COMMENTS': {
			state = {...state, fetched: true, fetching: false, comments: payload};
			break;
		}
		case 'FETCH_COMMENTS_ERROR': {
			state = {...state, fetched: false, fetching: false, error: payload};
			break;
		}
	}
	return state;
};*/


export const commentsReducer = createReducer(initialCommentState, {
  ['RECEIVE_COMMENTS'](state, {type, payload, ...action}) {
  	console.log('commentsReducer=> ', type);
    return {...state, fetched: true, fetching: false, comments: payload};
  }
});
