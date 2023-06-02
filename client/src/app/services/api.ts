import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query'
import {RootState} from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api"
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3})

export const api = createApi({
  reducerPath: 'splitAPI',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})