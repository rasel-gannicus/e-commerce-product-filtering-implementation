import { RootState } from "@/Redux/app/store";
import { clearAllFilters, removeFilter } from "@/Redux/slices/filterSlices";
import { useDispatch, useSelector } from "react-redux";

export const ActiveFilters = () => {
  const dispatch = useDispatch();
  const {
    selectedCategories,
    selectedBrands,
    selectedPriceRanges,
    selectedRatings,
    selectedFeatures,
    selectedAvailability,
    selectedReleaseDates,
  } = useSelector((state: RootState) => state.filter);

  const getActiveFilters = () => {
    const filters = [
      ...selectedCategories.map(cat => ({ type: 'category', value: cat })),
      ...selectedBrands.map(brand => ({ type: 'brand', value: brand })),
      ...selectedPriceRanges.map(range => ({ type: 'price', value: range })),
      ...selectedRatings.map(rating => ({ type: 'rating', value: `${rating} Stars` })),
      ...selectedFeatures.map(feature => ({ type: 'feature', value: feature })),
      ...selectedAvailability.map(status => ({ type: 'availability', value: status })),
      ...selectedReleaseDates.map(date => ({ type: 'date', value: date })),
    ];
    return filters;
  };

  const handleRemoveFilter = (type: string, value: string) => {
    dispatch(removeFilter({ type, value }));
  };

  const handleClearAll = () => {
    dispatch(clearAllFilters());
  };

  const activeFilters = getActiveFilters();

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
        Active Filters
        <button 
          className="text-sm text-blue-600 hover:underline"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {activeFilters.map((filter, index) => (
          <span 
            key={`${filter.type}-${filter.value}-${index}`} 
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            {filter.value}
            <button 
              className="ml-2 text-blue-800"
              onClick={() => handleRemoveFilter(filter.type, filter.value)}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};