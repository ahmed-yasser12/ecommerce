import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link
              to="/"
              className=""
            >
              LOGO
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-blue-600 hover:bg-blue-100 p-1 rounded"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-blue-600 hover:bg-blue-100 p-1 rounded"
            >
              Products
            </Link>
            <Link
              to="/wishlist"
              className="hover:text-blue-600 hover:bg-blue-100 p-1 rounded"
            >
              Wishlist
            </Link>
           
            
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div className="relative">
              <Link to={"/cart"}>
<ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                 {cart.length}
              </span>
              </Link>
              
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>

            <Link href="/wishlist" className="hover:text-blue-600">
              Wishlist
            </Link>

            
          </div>
        )}
      </div>
    </nav>
  );
}
