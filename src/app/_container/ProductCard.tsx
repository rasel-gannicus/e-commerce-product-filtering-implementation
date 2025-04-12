import { Product } from "@/utils/types";

import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";




interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
        {product.sale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            SALE
          </span>
        )}
        {product.new && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </span>
        )}
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <button className="absolute right-2 bottom-2 bg-white rounded-full p-2 shadow hover:bg-gray-100">
        <FaHeart color="#98A1AE" />        
        </button>
      </div>
      <div className={`p-4 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="block text-sm text-blue-600 font-medium">{product.brand}</span>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                {i >= Math.floor(product.rating) ? (
                  i === Math.floor(product.rating) && product.rating % 1 !== 0 ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaStar className="text-gray-300" />
                  )
                ) : (
                  <FaStar />
                )}
              </span>
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-gray-500 text-sm">{product.specs}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;