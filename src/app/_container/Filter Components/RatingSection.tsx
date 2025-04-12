import { FaChevronUp, FaStar } from "react-icons/fa6";

interface RatingSectionProps {
    ratings: {
      stars: number;
      count: number;
      min?: number;
    }[];
  }
  
  export const RatingSection: React.FC<RatingSectionProps> = ({ ratings }) => (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
        Rating
        <button className="text-xs text-gray-500">
          <FaChevronUp />
        </button>
      </h3>
      <div className="space-y-2">
        {ratings.map((rating) => (
          <label key={rating.stars} className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 flex items-center text-gray-700">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < rating.stars ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="ml-1 whitespace-nowrap">
                {rating.min ? `& Up (${rating.count})` : `(${rating.count})`}
              </span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );