const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  eventList: null,
  popularEventList: null,
};
const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventList: (state, action) => {
      state.eventList = action.payload;
    },
    setPopularEventList: (state, action) => {
      state.popularEventList = action.payload;
    },
  },
});

export const { setEventList, setPopularEventList } = eventSlice.actions;
export default eventSlice.reducer;
