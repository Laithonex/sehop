import { createStore, applyMiddleware} from 'redux'; //it adds middel ware to the store 
import logger from 'redux-logger'; //type of middelwaear
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer'

const middlewares   = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //it spread everything from the middleware it the store
export const persistor = persistStore(store); 

export default {store, persistor};

// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default store;


