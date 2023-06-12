import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { apiAuth } from './services/api'
import { authMiddleware } from '../middleware/authMiddleware'

export const store = configureStore({
  reducer: {
    authReducer,
    [apiAuth.reducerPath]: apiAuth.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apiAuth.middleware)
      .prepend(authMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
