import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { saveStudentData } from './FormAPI';


const initialState = {
  status: 'idle',
  error: null,
  formData:null,
};

export const saveStudentDataAsync = createAsyncThunk(
  'form/saveStudentData',
  async (Data, { rejectWithValue }) => {
    try {
      const response = await saveStudentData(Data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveStudentDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveStudentDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.formData = action.payload;
        state.error = null;
      })
      .addCase(saveStudentDataAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
  },
});

export const selectError = (state) => state.form.error;
export const selectData = (state) => state.form.formData;
export const selectFormStatus = (state) => state.form.status;

export default formSlice.reducer;