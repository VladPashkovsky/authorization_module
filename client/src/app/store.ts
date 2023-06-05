import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { apiAuth } from './services/api'

export const store = configureStore({
  reducer: {
    authReducer,
    [apiAuth.reducerPath]: apiAuth.reducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>>;
