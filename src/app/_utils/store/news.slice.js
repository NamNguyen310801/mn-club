const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  newsList: null,
  popularNewsList: null,
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsList: (state, action) => {
      state.newsList = action.payload;
    },
    setPopularNewsList: (state, action) => {
      state.popularNewsList = action.payload;
    },
  },
});

export const { setNewsList, setPopularNewsList } = newsSlice.actions;
export default newsSlice.reducer;
