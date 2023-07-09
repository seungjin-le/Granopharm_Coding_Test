import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Asset} from 'lodash'

interface CardsState extends Array<Asset> {}

const initialState: CardsState = []

export const resetCards = createAction('cards/reset')

export const AssetsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardsState>) => {
      return action.payload
    },
    addCards: (state, action: PayloadAction<any>) => {
      const assets = action.payload
        ?.map(({bundles}: any) => {
          return bundles.map((asset: any) => ({
            assetName: asset.asset_contract?.name,
            assetMainImage: asset.asset_contract?.image_url,
            assetLink: asset?.permalink,
            assetImages: asset.assets?.map((assetImages: any) => assetImages.image_thumbnail_url),
          }))
        })
        .flat()
      return assets ? assets : state
    },
  },
  extraReducers: builder => {
    builder.addCase(resetCards, () => {
      return initialState
    })
  },
})

export const {setCards, addCards} = AssetsSlice.actions

export default AssetsSlice.reducer

//
