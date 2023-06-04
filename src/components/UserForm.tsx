import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store";
import { updateEmail, updateUsername } from "../store/user/user.slice";

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
        <input
          type="text"
          id="email"
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>
      <button>Save</button>
    </form>
  );
};
