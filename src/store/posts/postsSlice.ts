import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../utils/types";
import { getPostsThunk } from "./postsThunk";

export interface PostsState {
  posts: Post[];
  loading: boolean;
}

const initialState: PostsState = { posts: [], loading: false };

export const PostsSlice = createSlice({
  name: "posts/get",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.pending, (state) => {
      state.loading = true;
    });
    builder
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.loading = false;
        state.posts = action.payload.data;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setLoading } = PostsSlice.actions;
export default PostsSlice.reducer;
