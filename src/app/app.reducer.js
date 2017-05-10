import { combineReducers } from 'redux';
import { userReducer } from './user';
import { commentsReducer } from './comment';

export const combinedReducers = combineReducers({
	user: userReducer,
	comments: commentsReducer
});
