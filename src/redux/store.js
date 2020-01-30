import { createStore, applyMiddleware} from 'redux'; //it adds middel ware to the store 
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; //type of middelwaear
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'; 

import rootReducer from './root-reducer'

// const sagaMiddleware = createSagaMiddleware(); 

const middlewares   = [thunk]; // this is responsiblie of showing the state and next state on the consol;

if (process.env.NODE_ENV === 'development'){ //it will show on the consol state if the state is equal devlopment, else it will show zero.
    middlewares.push(logger)
}; 

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //it spread everything from the middleware it the store

// sagaMiddleware.run()

export const persistor = persistStore(store); 

export default {store, persistor};

// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default store;


