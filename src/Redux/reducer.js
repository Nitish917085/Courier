import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "12-20-2001",
  dimension:{},
  routes:[],
  final_order:{}
};

const trakingSlice = createSlice({
  name: "traker",
  initialState: initialState,
  reducers: {

    addDate: (state, action) => {
      console.log("orinin red");
      state.final_origin = action.payload;
    },
    addDetails:(state,action)=>{
      state.routes=action.payload;
    },
    addOrder:(state,action)=>{
      state.final_order=action.payload;
    },
    addDimension:(state,action)=>{
      state.dimension=action.payload;
    }
  },
});

export const {  addDate, addDetails,addOrder,addDimension } = trakingSlice.actions;
export default trakingSlice.reducer;
