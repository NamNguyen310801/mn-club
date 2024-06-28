import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  clubTypeList: null,
  eventTypeList: null,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setClubTypeList: (state, action) => {
      state.clubTypeList = action.payload;
    },
    setEventTypeList: (state, action) => {
      state.eventTypeList = action.payload;
    },
  },
});

export const { setClubTypeList, setEventTypeList } = settingSlice.actions;
export default settingSlice.reducer;
