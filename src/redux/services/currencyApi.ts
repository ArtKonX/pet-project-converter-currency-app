import NEXT_PUBLIC_API_URL from '@/environment/environment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl: NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getExchangeRates: builder.query({
            query: (baseCurrency) => `/latest/${baseCurrency}`,
        }),
    }),
});

export const { useGetExchangeRatesQuery } = currencyApi;
export default currencyApi;