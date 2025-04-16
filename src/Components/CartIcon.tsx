"use client" ;
import { RootState } from '@/Redux/app/store';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

export const CartIcon = () => {
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <div className="relative cursor-pointer">
      <FaShoppingCart className="text-2xl" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};