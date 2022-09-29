import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {loggerMiddleware} from './middleware/logger';
import thunk from "redux-thunk";

import {rootReducer} from "./root-reducer";

const middleWares = [process.env.NODE_ENV === 'development' && loggerMiddleware, thunk].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store)