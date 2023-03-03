import {createSlice} from '@reduxjs/toolkit'
import {callsAPI} from "./callsAPI";

const slice = createSlice({
  name: 'calls',
  initialState: {
    registered: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(callsAPI.endpoints.getList.matchFulfilled, (state, {}) => {
        state.registered = true
      })
  },
})

export const callsReducer = slice.reducer
