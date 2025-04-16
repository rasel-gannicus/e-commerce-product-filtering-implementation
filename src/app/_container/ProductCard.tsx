import { Product } from "@/utils/types";

import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/Redux/slices/cartSlice';
import { RootState } from '@/Redux/app/store';
import { toast } from 'react-hot-toast';
import Image from "next/image";

const ProductCard = ({ product, viewMode }: { product: Product, viewMode: 'grid' | 'list' }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };

    dispatch(addToCart(cartItem));
    toast.success('Added to cart!');
  };

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className={`bg-white rounded-lg shadow-md ${viewMode === 'grid' ? '' : 'flex'}`}>
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
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={192}
          className="w-full h-48 object-cover"
          priority
        />
        <button className="absolute right-2 bottom-2 bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <FaHeart color="#98A1AE" />
        </button>
      </div>
      <div className={`p-4 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
        <div className="flex justify-between items-center mb-5">
          <span className="block text-sm text-blue-600 font-bold">{product.brand}</span>
          <div className=" flex justify-end items-center w-full">
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
          </div>
          <span className="text-xs text-gray-500 ml-1">({product?.reviewCount})</span>
        </div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          </div>

        </div>
        <div className="mb-2">
          <span className="text-gray-500 font-semibold text-sm">{product.description}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className={` bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 text-sm cursor-pointer transition duration-200 ${isInCart ? 'opacity-75' : ''
              }`}
            disabled={isInCart}
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;