import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store";
import { updateUsername } from "../store/user/user.slice";

export const UserForm = () => {
  const dispatch = useDispatch<useAppDispatch>();
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            dispatch(updateUsername(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <button>Save</button>
    </form>
  );
};
