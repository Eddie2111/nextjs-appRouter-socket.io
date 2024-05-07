"use client";

import {
  combineReducers,
  createStore,
} from 'redux';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './features/auth';

const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["somethingTemporary"],
};
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
