import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import { UserForm } from "./components/UserForm";
import { useDispatch } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { getPostsThunk } from "./store/posts/postsThunk";
import { useSelector } from "react-redux";
import { setLoading } from "./store/posts/postsSlice";

function App() {
  const dispatch = useDispatch<useAppDispatch>();
  const postsSlice = useSelector((state: RootState) => state.posts);
  return (
    <div>
      <ProfileCard />
      <UserForm />
      <h1>Posts</h1>
      <button
        onClick={() => {
          dispatch(setLoading(true));
          dispatch(getPostsThunk());
        }}
      >
        Fetch Posts
      </button>
      {postsSlice.loading && (
        <div>
          <span>loading Posts....</span>
        </div>
      )}
      {postsSlice.posts.map((post) => (
        <div key={post.id}>
          <span>id: {post.id}</span>
          <span> title: {post.title}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
