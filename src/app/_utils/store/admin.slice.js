const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  clubList: null,
  eventList: null,
  userList: null,
  studentList: null,
  isGetUserList: false,
  isGetStudentList: false,
  isGetClubList: false,
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setStudentList: (state, action) => {
      state.studentList = action.payload;
    },
    setClubList: (state, action) => {
      state.clubList = action.payload;
    },
    setEventList: (state, action) => {
      state.eventList = action.payload;
    },
    setIsGetUserList: (state, action) => {
      state.isGetUserList = action.payload;
    },
    setIsGetStudentList: (state, action) => {
      state.isGetStudentList = action.payload;
    },

    setIsGetClubList: (state, action) => {
      state.isGetClubList = action.payload;
    },
    resetUserList: (state) => {
      state.userList = null;
    },
    resetStudentList: (state) => {
      state.studentList = null;
    },
    resetClubList: (state) => {
      state.clubList = null;
    },
  },
});
export const {
  setUserList,
  setStudentList,
  setClubList,
  setEventList,
  setIsGetUserList,
  setIsGetStudentList,
  setIsGetClubList,
  resetUserList,
  resetStudentList,
  resetClubList,
} = adminSlice.actions;
export default adminSlice.reducer;
