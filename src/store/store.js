import {configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import changedCoursesSlice from "./reducers/changedCoursesSlice";
import services from "../services/index";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { сurrencyAPI } = services;

const reducers = {
  changedCoursesSlice,
  [сurrencyAPI.reducerPath]: сurrencyAPI.reducer
}

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['changedCoursesSlice']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer, 
    middleware: () =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
      .concat(сurrencyAPI.middleware)
  })
};