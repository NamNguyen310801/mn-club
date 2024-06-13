const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userList: null,
};
const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    resetUserList: (state) => {
      state.userList = null;
      state.jwtAuth = null;
    },
  },
});
export const { setUserList, resetUserList } = adminSlice.actions;
export default adminSlice.reducer;
