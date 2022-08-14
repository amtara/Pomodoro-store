import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../api/auth";

// initial value to store user
const initialState = {
  login: {
    status: "idle",
    error: null,
  },
  register: {
    status: "idle",
    error: null,
    data: {},
  },
  user: {},
};

// login
export const signIn = createAsyncThunk("auth/signIn", login);

// register
export const signUp = createAsyncThunk("auth/signUp", register);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // builder login user
      .addCase(signIn.pending, (state, { payload }) => {
        state.login.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        if (payload.data.accessToken) {
          state.login.status = "succeeded";
          state.user = payload.data;
          state.login.error = null;
          localStorage.setItem("user", JSON.stringify(payload.data));
          dispatchEvent(new Event("storage"));
        } else {
          state.login.error = "Username ou mot de passe incorrect";
        }
      })
      .addCase(signIn.rejected, (state, { error }) => {
        state.login.status = "failed";
        state.user = {};
        state.login.error = error;
      })

      // builder create new user
      .addCase(signUp.pending, (state, { payload }) => {
        state.register.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.register.status = "succeeded";
        state.register.data = payload;
        state.register.error = null;
      })
      .addCase(signUp.rejected, (state, { error }) => {
        state.register.status = "failed";
        state.register.data = [];
        state.register.error = error;
      });
  },
});

// selector login user
export const loginSelector = (state) => state.auth.login;

// selector create new user
export const registerSelector = (state) => state.auth.register;

// selector  get user
export const userSelector = (state) => state.auth?.user;

export default authSlice.reducer;
