import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const menuApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7070/' }),
  endpoints: (builder) => ({
    getAllMenu: builder.query({
      query: () => `menu`,
    }),
    getAllMenu: builder.query({
      query: (id) => `menu${id}`,
    }),
    deletMenu: builder.mutation({
      query: (id) => ({
          url: `menu/${id}`,  
          method: "DELETE"
      })
    }),
    postMenu: builder.mutation({
      query: (id, payload) => `menu`,
    }),
  }),
})

export const { useGetAllMenuQuery } = menuApi