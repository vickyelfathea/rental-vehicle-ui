import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    token: '',
    data: {},
  },
  reducers: {
    login(state, actions) {
      return {
        ...state,
        isAuth: true,
        token: actions.payload,
      };
    },
    addUsers(state, actions) {
      return {
        ...state,
        data: actions.payload,
      };
    },
  },
});

export const { login, addUsers } = userSlice.actions;
export default userSlice.reducer;
