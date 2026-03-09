import { Link } from "react-router-dom";
import useWishList from "../../hooks/useWishList";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

function Wishlist() {
  const { items, removeFromWishList } = useWishList();
  const { addToCart } = useCart();
  if (items.length === 0) {
    return (
      <div className="text-center py-50 text-gray-500">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
        <Helmet>
        <title>WishList | ShopHub</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-10">Your Wishlist</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((product) => (
          <div key={product.id} className=" overflow-hidden rounded-xl p-4 shadow">
            <img
              src={product.thumbnail}
              className="w-full h-48  hover:scale-105 transition-transform object-cover rounded"
            />

            <h3 className="mt-4 font-semibold">{product.title}</h3>

            <p className="text-blue-600 font-bold">${product.price}</p>

            <div className="flex gap-3 mt-4">
              {/* Move to Cart */}
              <button
                onClick={() => {
                  addToCart(product);
                  removeFromWishList(product.id);
                  toast.success("Moved to cart 🛒");
                }}
                className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded"
              >
                Move to Cart
              </button>

              {/* Remove */}
              <button
                onClick={() => removeFromWishList(product.id)}
                className="border hover:cursor-pointer px-4 py-2 rounded hover:bg-red-50 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
