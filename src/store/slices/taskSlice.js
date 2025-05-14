import { createSlice } from "@reduxjs/toolkit";
import AddColumn from "../../components/AddColumn";
const initialState = {
    columns:[],
    isDark: false,
}

const taskSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        addColumn : (state, action) => {
            state.columns[action.payload] = []; //dynamicall creating key 
        },
        addTask : (state, action) => {

            state.columns[column].push(taskItem)

        }

    }

})

export const {addColumn} = taskSlice.actions;
export default taskSlice.reducer;