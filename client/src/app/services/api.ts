import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query/react'
import { RootState } from '../store'
import { User } from '@prisma/client'

export type UserDataLogin = Omit<User, 'id' | 'name'>
export type UserData = Omit<User, 'id'>
type ResponseLoginData = User & { token: string }

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
})

// const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1})

export const apiAuth = createApi({
  reducerPath: 'apiAuth',
  baseQuery: baseQuery,
  // baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth'],
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    login: build.mutation<ResponseLoginData, UserDataLogin>({
      query: (userDataLogin) => ({ url: '/user/login', method: 'POST', body: userDataLogin }),
      invalidatesTags: ['Auth'],
    }),
    register: build.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({ url: '/user/register', method: 'POST', body: userData }),
      invalidatesTags: ['Auth'],
    }),
    current: build.query<ResponseLoginData, void>({
      query: () => ({ url: 'user/current' }),
      providesTags: result => ['Auth'],
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = apiAuth
export const { endpoints: { login, register, current } } = apiAuth

