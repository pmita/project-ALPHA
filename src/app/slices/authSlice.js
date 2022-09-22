/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// FIREBASE
import { fireAuth } from '../../firebase/config';

const initialState = {
  error: null,
  isPending: false,
  user: null
};

// ASYNC THUNKS
export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }) => {
  const response = await fireAuth.signInWithEmailAndPassword(email, password);
  return response.user;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state) => {
        state.isPending = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      });
  }
});

// REDUX SELECTORS
export const signInError = (state) => state.auth.error;
export const signInIsPending = (state) => state.auth.isPending;
export const signInUser = (state) => state.auth.user;

// MAIN REDUCER EXPORT
export default authSlice.reducer;
