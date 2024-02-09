import { createSlice } from "@reduxjs/toolkit";
export const empSlice = createSlice({
  name: "employee",
  initialState: {
    empList: [],
    selectedIndex: -1,
  },
  reducers: {
    addAll: (state, action) => {
      console.log("action", action.payload);
      state.empList = [...action.payload];
    },
    add: (state, action) => {
      state.empList.push({ ...action.payload });
    },
    del: (state, action) => {
      console.log(state);
      console.log(action.payload, action.type);
      state.empList.splice(action.payload, 1);
    },
    edit: (state, action) => {
      const empList = state.empList;
      empList[state.selectedIndex] = { ...action.payload };
      state.empList = [...empList];
    },
    selectedEmp: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});
export const { addAll, add, del, edit, selectedEmp } = empSlice.actions;
export default empSlice.reducer;
