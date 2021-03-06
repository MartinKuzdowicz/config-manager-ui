import { createStore, applyMiddleware, combineReducers } from 'redux';
import apiConfig from './api_config';
import pages from './pages';
import articles from './articles';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const configStoreData = combineReducers({
	apiConfig,
	pages,
	articles
});

const configureStore = () => {
	const logger = createLogger();
	const middlewares = [thunk, logger];
	return createStore(
		configStoreData,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;
