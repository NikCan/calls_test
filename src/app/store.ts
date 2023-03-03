import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {callsAPI} from "../features/calls/callsAPI";
import {callsReducer} from "../features/calls/calls-slice";


export const store = configureStore({
  reducer: {
    calls: callsReducer,
    [callsAPI.reducerPath]: callsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(callsAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
