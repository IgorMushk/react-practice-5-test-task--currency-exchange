import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "./currencySlice";
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['baseCurrency']
}

const persistedReducer = persistReducer(persistConfig, currencySlice.reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),      
  });

  export const persistor = persistStore(store)