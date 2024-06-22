const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  clubPublicList: null,
  recruitmentClubList: null,
  startIndex: 0,
};
const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClubPublicList: (state, action) => {
      state.clubPublicList = action.payload;
    },
    setStartIndex: (state, action) => {
      state.startIndex = action.payload;
    },
    setRecruitmentClubList: (state, action) => {
      state.recruitmentClubList = action.payload;
    },

    resetClubPublicList: (state) => {
      state.clubPublicList = null;
    },
  },
});

export const {
  setClubPublicList,
  setStartIndex,
  setRecruitmentClubList,
  resetClubPublicList,
} = clubSlice.actions;
export default clubSlice.reducer;
