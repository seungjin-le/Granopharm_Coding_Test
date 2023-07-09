import {configureStore} from '@reduxjs/toolkit'
import {CurrentPageSlice} from 'store/redux/pages/CurrentPage'
import {AssetsSlice} from 'store/redux/cards/AssetsSlice'

export const store = configureStore({
  reducer: {
    assets: AssetsSlice.reducer,
    currentPage: CurrentPageSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
