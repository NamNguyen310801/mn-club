import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  achievementList: null,
};
const achievementSlice = createSlice({
  name: "achievement",
  initialState,
  reducers: {
    setAchievementList: (state, action) => {
      state.achievementList = action.payload;
    },
  },
});

export const { setAchievementList } = achievementSlice.actions;
export default achievementSlice.reducer;
