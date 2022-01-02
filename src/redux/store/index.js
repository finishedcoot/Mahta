import { configureStore } from "@reduxjs/toolkit";

import StartAnimation from "../reducers/StartAnimation";

const store = configureStore({
  reducer: {
    startAnimation: StartAnimation,
  },
});

export { store };
