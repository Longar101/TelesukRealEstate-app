import { configureStore } from "@reduxjs/toolkit";

import userReducer from './user/userSlice';

//global store


export const store = configureStore({
  reducer:
  {
    user: userReducer// to access our user state in the component use useSelector((state)=>state.user)
    
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
