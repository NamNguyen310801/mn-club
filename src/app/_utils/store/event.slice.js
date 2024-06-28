const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  eventPublicList: null,
  popularEventList: null,
  eventTypeList: null,
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
    setEventTypeList: (state, action) => {
      state.eventTypeList = action.payload;
    },
    setStartIndex: (state, action) => {
      state.startIndex = action.payload;
    },
  },
});

export const {
  setEventPublicList,
  setPopularEventList,
  setStartIndex,
  setEventTypeList,
} = eventSlice.actions;
export default eventSlice.reducer;
