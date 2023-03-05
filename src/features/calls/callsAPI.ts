import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const callsAPI = createApi({
  reducerPath: 'calls/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.skilla.ru/mango/',
    prepareHeaders: (headers, {getState}) => {
      headers.set('authorization', `Bearer testtoken`)
      return headers
    },
  }),
  endpoints: build => ({
    getList: build.mutation<any, RequestGetListType>({
      query: params => ({
        url: 'getList',
        method: 'POST',
        params,
      }),
    }),
    getRecord: build.mutation<any, ReguestGetRecordType>({
      query: params => ({
        url: 'getRecord',
        method: 'POST',
        params,
        responseHandler: async (response) => window.URL.createObjectURL(await response.blob()),
        cache: "no-cache",
      }),
    }),
  }),
})

export const {useGetListMutation, useGetRecordMutation} = callsAPI

type RequestGetListType = {
  date_start?: string
  date_end?: string
  in_out?: 1 | 0 | null
}
type ReguestGetRecordType = {
  record: string
  partnership_id: string
}
export type ListType = {
  id: any
  in_out: any
  date: any
  person_avatar: any
  person_name: any
  from_number: any
  source: any
  status: any
  time: any
  record: string,
  partnership_id: string
}