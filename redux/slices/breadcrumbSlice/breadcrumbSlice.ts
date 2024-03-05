import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBreadcrumbState {
  items: string[];
  activeIndex: number;
}

const initialState: IBreadcrumbState = {
  items: ["할 일", "아직 안 한일"],
  activeIndex: 0,
};

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
