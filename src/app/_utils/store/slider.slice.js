import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sliderList: null,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSliderList: (state, action) => {
      state.sliderList = action.payload;
    },
  },
});

export const { setSliderList } = sliderSlice.actions;
export default sliderSlice.reducer;
