import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import waterReducer from '../features/water/waterSlice'
import { apiAuth, apiWater } from './services/api'
import { authMiddleware } from '../middleware/authMiddleware'
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  authReducer,
  waterReducer,
  [apiAuth.reducerPath]: apiAuth.reducer,
  [apiWater.reducerPath]: apiWater.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiAuth.reducerPath, apiWater.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware()
//         .concat(apiAuth.middleware, apiWater.middleware)
//         .prepend(authMiddleware.middleware)
//   })
// }

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(apiAuth.middleware, apiWater.middleware)
      .prepend(authMiddleware.middleware),
})

export const persistor = persistStore(store)
export default store

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']

// export const store = configureStore({
//   reducer: {
//     authReducer,
//     waterReducer,
//     [apiAuth.reducerPath]: apiAuth.reducer,
//     [apiWater.reducerPath]: apiWater.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware()
//       .concat(apiAuth.middleware, apiWater.middleware)
//       .prepend(authMiddleware.middleware),
// })

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
