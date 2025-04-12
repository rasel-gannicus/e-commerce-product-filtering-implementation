"use client" ;
import { useGetProductsQuery } from "@/Redux/services/productApi";
import { FilterData, CategoryFilter, BrandFilter, FilterOption, PriceRangeFilter } from "@/utils/types";
import { FaChevronUp } from "react-icons/fa";
import { RatingSection } from "./Filter Components/RatingSection";
import { FeatureSection } from "./Filter Components/FeatureSection";
import { AvailabilitySection } from "./Filter Components/AvailabilitySction";
import { ReleaseDateSection } from "./Filter Components/ReleaseDateSection";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/Redux/app/store";
import { toggleBrand, toggleCategory } from "@/Redux/slices/filterSlices";

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
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
          Filters
          <button className="text-sm text-blue-600 hover:underline" id="clear-all-filters">
            Clear All
          </button>
        </h3>
        <div className="flex flex-wrap gap-2 mb-4" id="active-filters">
          {['Laptops', '$500-$1000', '4+ Stars'].map((filter) => (
            <span key={filter} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
              {filter} <button className="ml-2 text-blue-800">&times;</button>
            </span>
          ))}
        </div>
      </div>

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

const PriceRangeSection: React.FC<PriceRangeSectionProps> = ({ ranges }) => (
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
          />
          <span className="ml-2 text-gray-700">
            {range.range} ({range.count})
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default FilterSidebar;