import { createSlice } from "@reduxjs/toolkit";
import { getNewGlobalRating } from "./utils";

export const counterSlice = createSlice({
  name: "dashboard",
  initialState: {
    specialists: null,
  },
  reducers: {
    addSpecialists: (state, action) => {
      state.specialists = action.payload.data;
    },
    setUserRating: (state, action) => {
      const { id, userRating } = action.payload;

      state.specialists.forEach((specialist) => {
        if (specialist.id === id) {
          const newGlobalRating = getNewGlobalRating(specialist, userRating);

          if (!specialist.userRating) {
            specialist.ratingsCount = specialist.ratingsCount + 1;
          }

          specialist.userRating = userRating;
          specialist.rating = Math.round(newGlobalRating * 10) / 10;
        }
      });
    },
    setAsMySpecialist: (state, action) => {
      const { id } = action.payload;

      state.specialists.forEach((specialist) => {
        if (specialist.id === id) {
          specialist.isMySpecialist = true;
        }
      });
    },
  },
});

export const { addSpecialists, setUserRating, setAsMySpecialist } =
  counterSlice.actions;

export default counterSlice.reducer;
