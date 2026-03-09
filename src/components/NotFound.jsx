import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}