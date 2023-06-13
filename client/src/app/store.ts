import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import waterReducer from '../features/water/waterSlice'
import { apiAuth, apiWater } from './services/api'
import { authMiddleware } from '../middleware/authMiddleware'

export const store = configureStore({
  reducer: {
    authReducer,
    waterReducer,
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiWater.reducerPath]: apiWater.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apiAuth.middleware, apiWater.middleware)
      .prepend(authMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
