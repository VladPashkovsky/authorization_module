import {User} from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import {authApi} from '../app/services/authApi'
import {RootState} from '../app/store'

interface AuthState {
  user: User & {token: string} | null,
  isAuth: boolean
}

const initialState: AuthState = {
  user: null,
  isAuth: false
}

export const authSlice = createSlice({
  name: '',
  initialState,
  reducers: {

  }
})