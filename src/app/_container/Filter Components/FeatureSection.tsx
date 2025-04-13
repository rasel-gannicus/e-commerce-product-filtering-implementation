import { RootState } from "@/Redux/app/store";
import { toggleFeature } from "@/Redux/slices/filterSlices";
import { FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface FeatureSectionProps {
  features: {
    name: string;
    count: number;
  }[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  const dispatch = useDispatch();
  const selectedFeatures = useSelector((state: RootState) => state.filter.selectedFeatures);

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
        Features
        <button className="text-xs text-gray-500">
          <FaChevronUp />
        </button>
      </h3>
      <div className="space-y-2">
        {features.map((feature) => (
          <label key={feature.name} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={selectedFeatures.includes(feature.name)}
              onChange={() => dispatch(toggleFeature(feature.name))}
            />
            <span className="ml-2 text-gray-700">
              {feature.name} ({feature.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};