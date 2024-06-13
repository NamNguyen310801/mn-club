const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  clubList: null,
  popularClubList: null,
};
const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClubList: (state, action) => {
      state.clubList = action.payload;
    },
    setPopularClubList: (state, action) => {
      state.popularClubList = action.payload;
    },
  },
});

export const { setClubList, setPopularClubList } = clubSlice.actions;
export default clubSlice.reducer;
