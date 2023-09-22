import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) => // getDefaultMiddleware().concat(logger),
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch