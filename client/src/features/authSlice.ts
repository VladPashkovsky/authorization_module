import { User } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../app/services/authApi'
import { RootState } from '../app/store'

interface AuthState {
  user: User & { token: string } | null,
  isAuth: boolean
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload
      state.isAuth = true
    })
  },
})