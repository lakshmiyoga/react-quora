import { configureStore } from '@reduxjs/toolkit'
import questionSilce from "../reducer/questionReducer"
import authReducer from '../reducer/authReducer'

export const store = configureStore({
  reducer: {
    Question : questionSilce,
    Auth : authReducer
  },
})