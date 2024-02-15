import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from './rootReducer';


export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        warnAfter: 500,
        ignoreState: true,
        ignoreActions: true,
      },
    }).concat([]),
});


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

// optional, but required for refetchOnFocus/refetchOnReconnect/refetchOnMountOrArgChange  etc behaviors
setupListeners(store.dispatch);

export default store;
