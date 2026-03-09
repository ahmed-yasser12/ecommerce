export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 fixed-bottom ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">MyStore</h2>
          <p className="text-sm">
            Your one-stop shop for premium products. Quality, speed, and
            satisfaction guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-white">
                All Products
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-white">
                Shopping Cart
              </a>
            </li>
            <li>
              <a href="/wishlist" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/compare" className="hover:text-white">
                Compare
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-white">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest deals.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} ShopHub. All rights reserved.
      </div>
    </footer>
  );
}