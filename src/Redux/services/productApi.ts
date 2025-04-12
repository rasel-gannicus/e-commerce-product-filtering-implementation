import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://raw.githubusercontent.com/HasiburRahmaan/swt-task/refs/heads/master/' 
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'data.json',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;