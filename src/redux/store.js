import { configureStore } from '@reduxjs/toolkit';
import ToggleTheme from './slices/ToggleTheme';
import User from './slices/User'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { Api } from '../RTK/ApiRequests';

export const store = configureStore({
  reducer: {
    toggleTheme: ToggleTheme,
    userInfo: User,
    [Api.reducerPath]: Api.reducer,
    // Add other reducers if you have any
  },
  // Add middleware for RTK-Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

// Enable automatic refetching, polling, etc.
setupListeners(store.dispatch);

