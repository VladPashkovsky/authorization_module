import { Water } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import { apiWater } from '../../app/services/api'
import { RootState } from '../../app/store'

interface WaterState {
  waters: Water[] | null
}

const initialState: WaterState = {
  waters: null,
}

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(apiWater.endpoints.getAllWaters.matchFulfilled, (state, action) => {
        state.waters = action.payload
      })
  },
})

export default waterSlice.reducer

export const selectWater = (state: RootState) => state.waterReducer.waters