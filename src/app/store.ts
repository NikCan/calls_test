import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {callsAPI} from "../features/calls/callsAPI";


export const store = configureStore({
  reducer: {
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
