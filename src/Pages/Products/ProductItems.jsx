import { Heart, Star, ShoppingCart } from "lucide-react";
import HalfStar from "./HaIfStar";
import { Link } from "react-router-dom";
import useWishList from "../../hooks/useWishList";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

function ProductItems({ products }) {
  const { toggleWishList, isInWishList } = useWishList();
  const { addToCart } = useCart();
  return (
    <>
      <Helmet>
        <title>Products Item | ShopHub</title>
      </Helmet>
      {products.slice(0, 9).map((product) => (
        <div
          key={product.id}
          className="bg-white  rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 hover:scale-105 transition-transform  object-cover rounded-lg"
              />
            </Link>

            {/* Wishlist Icon */}
            <button
              onClick={() => toggleWishList(product)}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
            >
              <Heart
                size={18}
                className={
                  isInWishList(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-500"
                }
              />
            </button>
          </div>

          {/* Content */}
          <div className="mt-4">
            {/* Title */}

            <h5 className="text-sm font-medium text-blue-500">
              {product.category}
            </h5>

            <Link to={`/products/${product.id}`}>
              <h3 className="text-lg hover:text-blue-500 transition-all  font-semibold text-gray-800">
                {product.title}
              </h3>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              {product.rating >= 4.5 ? (
                <>
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <HalfStar />
                </>
              ) : (
                <>
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                  <Star size={16} className="text-gray-300" />
                </>
              )}

              <span className="text-gray-500 text-sm ml-1">
                ({product.rating.toFixed(1)})
              </span>
            </div>

            <div className="flex items-center justify-between ">
              {/* Price */}
              <p className="text-xl font-bold  mt-2">
                ${product.price.toFixed(2)}
              </p>

              {/* Add To Cart */}
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success("Added to cart 🛒");
                }}
                className="mt-4 px-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductItems;
