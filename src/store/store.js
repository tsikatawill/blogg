import { persistReducer, persistStore } from 'redux-persist'
import UserReducer from '../features/UserSlice'
import { configureStore } from '@reduxjs/toolkit'

import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, UserReducer)

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store

export const persistor = persistStore(store)
