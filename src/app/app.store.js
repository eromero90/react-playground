import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combinedReducers } from './app.reducer';

const middlewares = applyMiddleware(thunk, logger);

export default createStore(combinedReducers, middlewares);