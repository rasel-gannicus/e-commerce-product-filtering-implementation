import { RootState } from "@/Redux/app/store";
import { toggleReleaseDate } from "@/Redux/slices/filterSlices";
import { FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface ReleaseDateSectionProps {
  releaseDates: {
    period: string;
    count: number;
  }[];
}

export const ReleaseDateSection: React.FC<ReleaseDateSectionProps> = ({ releaseDates }) => {
  const dispatch = useDispatch();
  const selectedReleaseDates = useSelector((state: RootState) => state.filter.selectedReleaseDates);

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
        Release Date
        <button className="text-xs text-gray-500">
          <FaChevronUp />
        </button>
      </h3>
      <div className="space-y-2">
        {releaseDates.map((date) => (
          <label key={date.period} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={selectedReleaseDates.includes(date.period)}
              onChange={() => dispatch(toggleReleaseDate(date.period))}
            />
            <span className="ml-2 text-gray-700">
              {date.period} ({date.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};