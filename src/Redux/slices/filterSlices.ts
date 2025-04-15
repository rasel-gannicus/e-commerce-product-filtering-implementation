import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedCategories: string[];
  selectedBrands: string[];
  selectedPriceRanges: string[];
  selectedRatings: number[];
  selectedFeatures: string[];
  selectedAvailability: string[];
  selectedReleaseDates: string[];
}

const initialState: FilterState = {
  selectedCategories: [],
  selectedBrands: [],
  selectedPriceRanges: [],
  selectedRatings: [],
  selectedFeatures: [],
  selectedAvailability: [],
  selectedReleaseDates: [],
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
        const rating = action.payload;
        const index = state.selectedRatings.indexOf(rating);
        if (index === -1) {
          state.selectedRatings.push(rating);
        } else {
          state.selectedRatings.splice(index, 1);
        }
      },
    toggleFeature: (state, action: PayloadAction<string>) => {
      const feature = action.payload;
      const index = state.selectedFeatures.indexOf(feature);
      if (index === -1) {
        state.selectedFeatures.push(feature);
      } else {
        state.selectedFeatures.splice(index, 1);
      }
    },
    toggleAvailability: (state, action: PayloadAction<string>) => {
      const availability = action.payload;
      const index = state.selectedAvailability.indexOf(availability);
      if (index === -1) {
        state.selectedAvailability.push(availability);
      } else {
        state.selectedAvailability.splice(index, 1);
      }
    },
    toggleReleaseDate: (state, action: PayloadAction<string>) => {
      const date = action.payload;
      const index = state.selectedReleaseDates.indexOf(date);
      if (index === -1) {
        state.selectedReleaseDates.push(date);
      } else {
        state.selectedReleaseDates.splice(index, 1);
      }
    },
  },
});

export const { 
  toggleCategory, 
  toggleBrand, 
  togglePriceRange, 
  toggleRating,
  toggleFeature,
  toggleAvailability, 
  toggleReleaseDate 
} = filterSlice.actions;
export default filterSlice.reducer;