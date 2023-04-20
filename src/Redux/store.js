import { configureStore } from '@reduxjs/toolkit'
import trakingSlice from './reducer'

const store = configureStore({
  reducer:trakingSlice ,
})

export default store