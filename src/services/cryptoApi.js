import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '133ea77deemsh8258430ed30e8d9p14cb0fjsna9cb654234a9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinid) => createRequest(`/coin/${coinid}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinid, timePeriod }) => createRequest(`/coin/${coinid}/history?timePeriod=${timePeriod}`),

        })
    })
});

export const {
    // must have use- as prefix and -Query as suffix for redux
    // "GetCrypto" == to "getCryptos" from earlier
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;