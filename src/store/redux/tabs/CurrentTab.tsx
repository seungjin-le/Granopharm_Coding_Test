import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CurrentTabState {
  value: string
}

const initialState: CurrentTabState = {
  value: '/',
}

export const CurrentTabSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    changeCurrentTab: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    resetCurrentTab: state => {
      state.value = initialState.value
    },
  },
})

export const {changeCurrentTab, resetCurrentTab} = CurrentTabSlice.actions

export default CurrentTabSlice.reducer
