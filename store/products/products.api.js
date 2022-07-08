import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";import {HYDRATE} from "next-redux-wrapper";export  const productsApi = createApi({    reducerPath: 'api/products',    baseQuery: fetchBaseQuery({        baseUrl: process.env.NODE_ENV === 'production'            ? 'https://test-treeum.herokuapp.com/'            : 'http://localhost:3000/',    }),    extractRehydrationInfo(action, { reducerPath }) {        if (action.type === HYDRATE) {            return action.payload[reducerPath]        }    },    endpoints: (build) => ({        getFilteredProducts: build.query({            query: (queryParams) => `api/products${queryParams}`,        }),        getProducts: build.query({            query: () => `api/products`,        }),    }),});// Export hooks for usage in functional componentsexport  const {useGetProductsQuery, useGetFilteredProductsQuery, util: { getRunningOperationPromises }} = productsApi// export endpoints for use in SSRexport  const { getProducts, getFilteredProducts} = productsApi.endpoints;