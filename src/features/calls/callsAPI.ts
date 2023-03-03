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
  }),
})

export const {useGetListMutation} = callsAPI
type RequestGetListType = {
  date_start?: string
  date_end?: string
  in_out?: 1 | 0 | null
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
}