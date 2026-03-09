import { Link } from "react-router-dom";
import useWishList from "../../hooks/useWishList";

function Wishlist() {
  const { items, removeFromWishList } = useWishList();

  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        Your wishlist is empty
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-10">Your Wishlist</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow"
          >
            <img
              src={product.thumbnail}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="mt-4 font-semibold">
              {product.title}
            </h3>

            <p className="text-blue-600 font-bold">
              ${product.price}
            </p>

            <div className="flex gap-3 mt-4">
              {/* Move to Cart */}
              <Link
                to="/cart"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Move to Cart
              </Link>

              {/* Remove */}
              <button
                onClick={() =>
                  removeFromWishList(product.id)
                }
                className="border px-4 py-2 rounded hover:bg-red-50 text-red-500"
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