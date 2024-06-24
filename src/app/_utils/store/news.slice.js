const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  newsPublicList: null,
  popularNewsList: null,
  startIndex: 0,
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsPublicList: (state, action) => {
      state.newsPublicList = action.payload;
    },
    setPopularNewsList: (state, action) => {
      state.popularNewsList = action.payload;
    },
    setStartIndex: (state, action) => {
      state.startIndex = action.payload;
    },
  },
});

export const { setNewsPublicList, setPopularNewsList, setStartIndex } =
  newsSlice.actions;
export default newsSlice.reducer;
