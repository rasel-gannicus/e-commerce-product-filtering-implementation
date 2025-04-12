import { FaChevronUp } from "react-icons/fa6";

interface AvailabilitySectionProps {
    availability: {
        status: string;
        count: number;
    }[];
}

export const AvailabilitySection: React.FC<AvailabilitySectionProps> = ({ availability }) => (
    <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-semibold mb-3 flex justify-between items-center">
            Availability
            <button className="text-xs text-gray-500">
                <FaChevronUp />
            </button>
        </h3>
        <div className="space-y-2">
            {availability.map((item) => (
                <label key={item.status} className="flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">
                        {item.status} ({item.count})
                    </span>
                </label>
            ))}
        </div>
    </div>
);