import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Asset} from 'lodash'

interface CardsState extends Array<Asset> {}

const initialState: CardsState = []

export const resetCards = createAction('cards/reset')

export const CardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardsState>) => {
      return action.payload
    },
    addCards: (state, action: PayloadAction<CardsState>) => {
      return [...state, ...action.payload]
    },
  },
  extraReducers: builder => {
    builder.addCase(resetCards, () => {
      return initialState
    })
  },
})

export const {setCards, addCards} = CardSlice.actions

export default CardSlice.reducer
