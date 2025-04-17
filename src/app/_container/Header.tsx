import { CartIcon } from "@/Components/CartIcon";
import { FaSearch, FaUser } from "react-icons/fa";


export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">TechGear</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4 font-semibold">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#" className="hover:text-blue-200">Shop</a>
            <a href="#" className="hover:text-blue-200">Categories</a>
            <a href="#" className="hover:text-blue-200">Deals</a>
            <a href="#" className="hover:text-blue-200">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-200">
              <FaSearch size={23} />
            </button>
            <CartIcon />
            <button className="hover:text-blue-200">
              <FaUser size={23} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}