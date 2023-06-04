import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  id: number;
  username: string;
  email: string;
}

export const initialState: IUserState = {
  id: 1,
  username: "guardians",
  email: "guardians@gmail.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateUsername, updateEmail } = userSlice.actions;
export default userSlice.reducer;
