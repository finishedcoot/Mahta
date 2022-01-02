import { createSlice } from "@reduxjs/toolkit";

const StartAnimationSlice = createSlice({
  name: "startAnimation",
  initialState: { ended: false },
  reducers: {
    animationEnded: (state, action) => {
      state.ended = action.payload;
    },
  },
});
export const { animationEnded } = StartAnimationSlice.actions;
export default StartAnimationSlice.reducer;
