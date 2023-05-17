import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CurrentPageState {
  value: number
}

const initialState: CurrentPageState = {
  value: 1,
}

export const CurrentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    incrementCurrentPage: state => {
      state.value += 1
    },
    resetCurrentPage: state => {
      state.value = 1
    },
  },
})

export const {setCurrentPage, incrementCurrentPage, resetCurrentPage} = CurrentPageSlice.actions

export default CurrentPageSlice.reducer
