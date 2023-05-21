import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



  export const postregister = createAsyncThunk('posts/register', async (data) => {
    const response = await axios.post('http://localhost:3000/register', data)
    return response.data
  })

  export const getRegister = createAsyncThunk('get/register', async (data) => {
    const response = await axios.get(`http://localhost:3000/register?email=${data.email}&password=${data.password}`)
    return response.data
  })

 
  const authReducer = createSlice({
    name: 'Auth',
    initialState:{
      //  loginList:{},
       registerList:[]
    } ,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      builder.addCase(getRegister.fulfilled, (state, action) => {
        state.registerList = action.payload ;
      })
    },
  })



export default authReducer.reducer