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

export const signOut = createAsyncThunk('auth/signOut', async () => {
  const response = await fireAuth.signOut();
  return response;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
    // Sign In actions
      .addCase(signIn.pending, (state) => {
        state.isPending = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      })
      // Sign Out actions
      .addCase(signOut.pending, (state) => {
        state.isPending = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isPending = false;
        state.error = null;
        state.user = null;
      })
      .addCase(signOut.rejected, (state, action) => {
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
