"use client";
import { RootState } from "@/Redux/app/store";
import { useGetProductsQuery } from "@/Redux/services/productApi";
import { toggleBrand, toggleCategory, togglePriceRange } from "@/Redux/slices/filterSlices";
import { FilterData, FilterOption, PriceRangeFilter } from "@/utils/types";
import { FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AvailabilitySection } from "./Filter Components/AvailabilitySction";
import { FeatureSection } from "./Filter Components/FeatureSection";
import { RatingSection } from "./Filter Components/RatingSection";
import { ReleaseDateSection } from "./Filter Components/ReleaseDateSection";
import { ActiveFilters } from "./Filter Components/ActiveFilters";

const FilterSidebar: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  const filters = data?.filters as FilterData;
  // console.log(filters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: There is an error loading the filter data</div>;
  }

  return (
    <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">

      <ActiveFilters />

      <FilterSection
        title="Category"
        options={filters.categories.map(cat => ({
          label: cat.name,
          count: cat.count
        }))}
      />

      <FilterSection
        title="Brand"
        options={filters.brands.map(brand => ({
          label: brand.name,
          count: brand.count
        }))}
      />

      <PriceRangeSection ranges={filters.priceRanges} />
      <RatingSection ratings={filters.ratings} />
      <FeatureSection features={filters.features} />
      <AvailabilitySection availability={filters.availability} />
      <ReleaseDateSection releaseDates={filters.releaseDates} />

      <div className="mt-6 border-t pt-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
  const selectedBrands = useSelector((state: RootState) => state.filter.selectedBrands);

  const handleChange = (label: string) => {
    if (title === 'Category') {
      dispatch(toggleCategory(label));
    } else if (title === 'Brand') {
      dispatch(toggleBrand(label));
    }
  };

  const isChecked = (label: string) => {
    if (title === 'Category') {
      return selectedCategories.includes(label);
    } else if (title === 'Brand') {
      return selectedBrands.includes(label);
    }
    return false;
  };

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
        {title}
        <button className="text-xs text-gray-500">
          <FaChevronUp />
        </button>
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.label} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={isChecked(option.label)}
              onChange={() => handleChange(option.label)}
            />
            <span className="ml-2 text-gray-700">
              {option.label} ({option.count})
            </span>
          </label>
        ))}
        <button className="text-sm text-blue-600 hover:underline mt-1">Show more</button>
      </div>
    </div>
  );
};

// Add new section components
interface PriceRangeSectionProps {
  ranges: PriceRangeFilter[];
}

const PriceRangeSection: React.FC<PriceRangeSectionProps> = ({ ranges }) => {
  const dispatch = useDispatch();
  const selectedPriceRanges = useSelector((state: RootState) => state.filter.selectedPriceRanges);

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
        Price Range
        <button className="text-xs text-gray-500">
          <FaChevronUp />
        </button>
      </h3>
      <div className="space-y-2">
        {ranges.map((range) => (
          <label key={range.range} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={selectedPriceRanges.includes(range.range)}
              onChange={() => dispatch(togglePriceRange(range.range))}
            />
            <span className="ml-2 text-gray-700">
              {range.range} ({range.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;