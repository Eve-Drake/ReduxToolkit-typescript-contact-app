import {configureStore} from '@reduxjs/toolkit'
import contactListReducer from './contactListSlice'

export const store = configureStore({
    reducer: {
        contactList: contactListReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch