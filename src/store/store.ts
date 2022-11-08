import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
// Or from '@reduxjs/toolkit/query/react'
// https://redux-toolkit.js.org/tutorials/rtk-query
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { pokemonApi } from './services/pokemon'
import counterReducer from '../features/counter/counterSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notifications: notificationsReducer,
    // Add the generated reducer as a specific top-level slice
    // [pokemonApi.reducerPath]: pokemonApi.reducer,  
  },
  middleware: (getDefaultMiddleware) => // getDefaultMiddleware().concat(logger),
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
    // serializableCheck: {
    //   // Ignore these action types
    //   ignoredActions: ['PayloadAction', 'notifications/incrementByAmount'],
    //   // Ignore these field paths in all actions
    //   ignoredActionPaths: ['notifications.1.content', 'payload.content'],
    //   // Ignore these paths in the state
    //   ignoredPaths: ['notifications.1.content', 'payload.content'],
    // },
  }),
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch