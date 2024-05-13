import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/customers" }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => `customers`,
    }),
    getCategoryByID: builder.query({
      query: (id) => `customers/${id}`,
    }),
    deleteCategoryByID: builder.mutation({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetCustomerByIDQuery,
  useDeleteCustomerByIDMutation,
  usePostCustomerMutation,
  usePatchCustomerMutation
} = customersApiApi;
