import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./components/Dashboard/slice";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
