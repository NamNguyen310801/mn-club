import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import adminSlice from "./admin.slice";
import clubSlice from "./club.slice";
import eventSlice from "./event.slice";
import newsSlice from "./news.slice";
import achievementSlice from "./achievement.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    club: clubSlice,
    event: eventSlice,
    news: newsSlice,
    achievement: achievementSlice,
  },
});