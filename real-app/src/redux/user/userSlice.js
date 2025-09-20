import { createSlice } from "@reduxjs/toolkit";

 //create initial statte of our global user variable
 const initialState = {
      currentUser : null,
       error:null,
       loading:false
       
      
 };

const userSlice = createSlice({
  name: "user",
  initialState, //
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;// payload is the user data we get from backend
      state.loading = false;// after getting data loading is false
      state.error = null;//after getting data error is null
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
}
);

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;// to access our actions in login.jsx and signup.jsx
export default userSlice.reducer;// to access our reducer in store.js
