import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AppApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050' }),
  endpoints: () => ({}),
})