import { configureStore } from "@reduxjs/toolkit";
import home from "./home/slice"
const store = configureStore({
    reducer:{
       home 
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;