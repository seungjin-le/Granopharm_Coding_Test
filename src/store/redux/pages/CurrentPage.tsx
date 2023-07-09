import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CurrentPageState {
  value: number
}

const initialState: CurrentPageState = {
  value: 0,
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
      state.value = initialState.value
    },
  },
})

export const {setCurrentPage, incrementCurrentPage, resetCurrentPage} = CurrentPageSlice.actions

export default CurrentPageSlice.reducer
