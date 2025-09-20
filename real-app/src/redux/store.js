import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from './user/userSlice';
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


//global store

const rootReducer = combineReducers({ user: userReducer })


const persistConfig = {
  key: "root",
storage,// which storage we are using
  version:1,// to manage the version of our state
 
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),


});

export const persistor = persistStore(store);// to create a persistor for our store