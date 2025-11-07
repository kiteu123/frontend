import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "홍길동",
  age: 25,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { updateName, updateAge } = userSlice.actions;
export default userSlice.reducer;
