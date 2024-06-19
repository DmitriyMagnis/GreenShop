import { createSlice } from '@reduxjs/toolkit';
import type { Nullable } from '@typings/common';

interface IAuthState {
  user: Nullable<IUser>;
  isAuth: boolean;
}

export interface IUser {
  name: string;
  email: string;
}

const initialState: IAuthState = {
  user: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});
