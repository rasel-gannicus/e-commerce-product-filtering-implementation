import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    selectedCategories: string[];
    selectedBrands: string[];
    selectedPriceRanges: string[];
    selectedRatings: number[];
  }

  const initialState: FilterState = {
    selectedCategories: [],
    selectedBrands: [],
    selectedPriceRanges: [],
    selectedRatings: [],
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
    toggleBrand: (state, action: PayloadAction<string>) => {
      const brand = action.payload;
      const index = state.selectedBrands.indexOf(brand);
      if (index === -1) {
        state.selectedBrands.push(brand);
      } else {
        state.selectedBrands.splice(index, 1);
      }
    },
    togglePriceRange: (state, action: PayloadAction<string>) => {
        const range = action.payload;
        const index = state.selectedPriceRanges.indexOf(range);
        if (index === -1) {
          state.selectedPriceRanges.push(range);
        } else {
          state.selectedPriceRanges.splice(index, 1);
        }
      },
      toggleRating: (state, action: PayloadAction<number>) => {
        console.log('triggered');
        const rating = action.payload;
        const index = state.selectedRatings.indexOf(rating);
        if (index === -1) {
          state.selectedRatings.push(rating);
        } else {
          state.selectedRatings.splice(index, 1);
        }
      },
  },
});

export const { toggleCategory, toggleBrand, togglePriceRange, toggleRating } = filterSlice.actions;
export default filterSlice.reducer;