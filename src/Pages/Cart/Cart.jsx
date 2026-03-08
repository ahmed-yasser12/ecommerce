export default function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 120,
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 80,
      image: "https://via.placeholder.com/100",
      quantity: 2,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 my-20 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
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
                <button className="px-2 py-1 border rounded">-</button>
                <span>{item.quantity}</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>

              {/* Remove */}
              <button className="text-red-500 hover:text-red-700">
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
            <span>$280</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>$290</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}