import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const Greetings = createAsyncThunk(
  'greetings/Greetings',
  async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:3000/api/messages/random'
      );
      
      const data = await response.json();

      return data.greeting;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  }
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(Greetings.fulfilled, (state, action) => ({
        ...state,
        value: action.payload,
      }))
    
  },
});

export default greetingSlice.reducer;