import { FilterOption } from "@/utils/types";


const FilterSidebar: React.FC = () => {
  const categories: FilterOption[] = [
    { label: 'Laptops', count: 24, checked: true },
    { label: 'Smartphones', count: 56 },
    { label: 'Tablets', count: 18 },
    { label: 'Audio', count: 37 },
    { label: 'Accessories', count: 92 },
  ];

  const brands: FilterOption[] = [
    { label: 'Apple', count: 34 },
    { label: 'Samsung', count: 42 },
    { label: 'Dell', count: 19 },
    { label: 'HP', count: 23 },
    { label: 'Lenovo', count: 27 },
    { label: 'Sony', count: 16 },
  ];

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

      <FilterSection title="Category" options={categories} />
      <FilterSection title="Brand" options={brands} />
      {/* <PriceRangeSection />
      <RatingSection />
      <FeaturesSection />
      <AvailabilitySection />
      <ReleaseDateSection /> */}

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

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => (
  <div className="border-t pt-4 mt-4">
    <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
      {title}
      <button className="text-xs text-gray-500">
        <i className="fas fa-chevron-up"></i>
      </button>
    </h3>
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.label} className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            defaultChecked={option.checked}
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

export default FilterSidebar;