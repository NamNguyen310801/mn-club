const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  eventPublicList: null,
  popularEventList: null,
  startIndex: 0,
};
const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventPublicList: (state, action) => {
      state.eventPublicList = action.payload;
    },
    setPopularEventList: (state, action) => {
      state.popularEventList = action.payload;
    },
    setStartIndex: (state, action) => {
      state.startIndex = action.payload;
    },
  },
});

export const { setEventPublicList, setPopularEventList, setStartIndex } =
  eventSlice.actions;
export default eventSlice.reducer;
