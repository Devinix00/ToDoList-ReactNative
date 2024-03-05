import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBreadcrumbState {
  breadcrumb: string[];
  activeIndex: number;
}

const initialState: IBreadcrumbState = {
  breadcrumb: ["해야 할 일", "아직 안 한 일"],
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
