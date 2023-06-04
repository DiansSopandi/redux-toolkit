import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

export const store = configureStore({ reducer: { user: userReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;