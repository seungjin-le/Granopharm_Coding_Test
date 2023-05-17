import {configureStore} from '@reduxjs/toolkit'
import {CardSlice} from './redux/cards/CardSlice'
import {CurrentPageSlice} from 'store/redux/pages/CurrentPage'

export const store = configureStore({
  reducer: {
    cards: CardSlice.reducer,
    currentPage: CurrentPageSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
