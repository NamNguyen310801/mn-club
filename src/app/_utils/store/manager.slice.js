const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  departmentList: null,
  isGetDepartmentList: false,
};
const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    setDepartmentList: (state, action) => {
      state.departmentList = action.payload;
    },

    setIsGetDepartmentList: (state, action) => {
      state.isGetDepartmentList = action.payload;
    },

    resetDepartmentList: (state) => {
      state.departmentList = null;
    },
  },
});
export const {
  setDepartmentList,
  setIsGetDepartmentList,
  resetDepartmentList,
} = managerSlice.actions;
export default managerSlice.reducer;
