import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



  export const postQuestions = createAsyncThunk('posts/question', async (data) => {
    const response = await axios.post('http://localhost:3000/question', data)
    return response.data
  })

  export const getQuestions = createAsyncThunk('get/question', async () => {
    const response = await axios.get(`http://localhost:3000/question?email=${sessionStorage.getItem('email')}`)
    return response.data
  })

 
  const questionSilce = createSlice({
    name: 'Question',
    initialState:{
        questionList: []
    } ,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      builder.addCase(getQuestions.fulfilled, (state, action) => {
          state.questionList = action.payload ;
      })
    },
  })


// Action creators are generated for each case reducer function

export default questionSilce.reducer