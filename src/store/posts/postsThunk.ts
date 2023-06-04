import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../utils/api";
/** _ means no payload or parameters */
export const getPostsThunk = createAsyncThunk("posts/get", () => getPosts());
// export const getPostsThunk = createAsyncThunk("posts/get", (_, thunkAPI) => {});
