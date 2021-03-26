import {contactsReducer} from './contacts';
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import {createReducer} from '@reduxjs/toolkit';
import {
        persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, 
} from 'redux-persist';
 import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';

const middleware = [
    ...getDefaultMiddleware({
    serializableCheck:{
    ignoredActions:[
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, 
        ],
    }
    }),
    //logger,
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token']
}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer) ,
        contacts: contactsReducer,
        error:createReducer(null, {}),
        },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {store, persistor};