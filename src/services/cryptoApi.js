import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
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
            query: () => createRequest('/exchanges')
        })
    })
})