import {configureStore} from '@reduxjs/toolkit';
import AppReducer from "../store/slices/taskSlice"

const store = configureStore({
    reducer:{
        app: AppReducer,
    }
})

export default store;