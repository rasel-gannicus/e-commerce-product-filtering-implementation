import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedCategories: string[];
}

const initialState: FilterState = {
  selectedCategories: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const index = state.selectedCategories.indexOf(category);
      if (index === -1) {
        state.selectedCategories.push(category);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
    clearCategories: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const { toggleCategory, clearCategories } = filterSlice.actions;
export default filterSlice.reducer;