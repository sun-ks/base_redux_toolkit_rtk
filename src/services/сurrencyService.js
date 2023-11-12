import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import dayjs from 'dayjs';

const baseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory';

const currentDate = dayjs(new Date()).format('YYYYMMDD');

export const сurrencyAPI = createApi({
  reducerPath: 'сurrencyAPI',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  tagTypes: ['Currency'],
  endpoints: (build) => ({
    fetchCurrencyCurrentDate: build.query({
      query: () => ({
        url: `/exchange?date=${currentDate}&json`,
      }),
    }),
    fetchCurrencySpecialDate: build.query({
      query: (date) => ({
        url: `/exchange?date=${date}&json`
      }),
      //providesTags: result => ['Post']
    }),
  })
});