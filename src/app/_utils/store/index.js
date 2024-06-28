import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import adminSlice from "./admin.slice";
import clubSlice from "./club.slice";
import eventSlice from "./event.slice";
import newsSlice from "./news.slice";
import achievementSlice from "./achievement.slice";
import managerSlice from "./manager.slice";
import settingSlice from "./setting.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    manager: managerSlice,
    club: clubSlice,
    event: eventSlice,
    news: newsSlice,
    achievement: achievementSlice,
    setting: settingSlice,
  },
});
