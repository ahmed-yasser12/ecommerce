import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";

export default function Cart() {
  
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;
  return (
    
    <div className="max-w-7xl mx-auto px-6 my-20 py-10">
      <Helmet>
        <title>Cart  | ShopHub</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between  rounded-lg p-4 shadow-sm"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  className="px-2 hover:cursor-pointer py-1 border rounded"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 hover:cursor-pointer py-1 border rounded"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:cursor-pointer hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border rounded-lg p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
