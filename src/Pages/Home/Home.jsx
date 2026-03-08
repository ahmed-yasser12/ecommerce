import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../features/Products/Services/productAPI";
import ProductItems from "../Products/ProductItems";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [TopProducts, setTopProducts] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchProducts = async () => {
      const products = await getProducts();
      const topRatedProducts = products
        .filter((p) => p.rating >= 4.5)
        .slice(0, 6);
      setTopProducts(topRatedProducts);
    };
    fetchProducts();
  }, []);
  return (
    <>
      {/*  Hero Section */}
      <section className="w-full   ">
        <div className="  px-6 py-20 text-left w-full">
          {/* Small Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            ✨ New Collection Available
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Products <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              You'll Love
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-gray-600 mb-8">
            Shop curated collections of premium products. From cutting-edge
            electronics to timeless fashion — all with fast shipping and
            hassle-free returns.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row  gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Link to="/products">Shop Now</Link>
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <Link to="/products">Explore Collection</Link>
            </button>
          </div>
        </div>
      </section>
      {/*   {/* Stats Bar */}
      <section className="bg-white border-b  border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "24+", label: "Products" },
              { value: "5", label: "Categories" },
              { value: "Free", label: "Shipping" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Top Rated Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between ">
          <div>
            <h3 className="text-3xl font-bold my-2">Top Rated Products</h3>
            <p className="text-gray-400">
              Our highest-rated products loved by customers
            </p>
          </div>
          <Link to="/products" className="text-blue-600 transition-all ">
            View All {">"}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          <ProductItems products={TopProducts} />
        </div>
      </section>
      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-linear-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don&apos;t Miss Out on Deals
            </h2>
            <p className="text-primary-100 mb-6 max-w-md mx-auto">
              Subscribe and get 15% off your first order plus exclusive access
              to new arrivals and special promotions.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-xl text-sm focus:outline-none border border-gray-200"
              />
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-r-xl hover:bg-gray-800 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
