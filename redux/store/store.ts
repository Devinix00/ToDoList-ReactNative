import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "../slices/toDosSlice/toDosSlice";
import breadcrumbSlice from "../slices/breadcrumbSlice/breadcrumbSlice";

const store = configureStore({
  reducer: {
    toDos: toDosSlice,
    breadcrumb: breadcrumbSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
