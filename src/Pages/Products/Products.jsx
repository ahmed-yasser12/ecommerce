import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductItems from "./ProductItems";
import {
  getCategories,
  getProducts,
} from "../../features/Products/Services/productAPI";
import { Helmet } from "react-helmet-async";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // Read values from URL
  const search = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const products = await getProducts();
      const cats = await getCategories();

      setAllProducts(products);
      setCategories(cats);

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Update URL helper
  const updateParams = (params) => {
    setSearchParams({
      search,
      category: selectedCategory,
      page: currentPage,
      ...params,
    });
  };

  // 🔎 Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "" || product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  if (loading) {
    return (
      // // <div className="flex flex-col items-center justify-center py-70">
      //   {/* <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4" />
      //   <p className="text-gray-500 text-sm">Loading products...</p> */}

      // {/* </div> */}
      <>
        <div className="grid grid-cols-1 my-40 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Helmet>
        <title>Products | ShopHub</title>
      </Helmet>
      <h3 className="text-3xl font-bold">Our Products</h3>

      {/* Search + Category */}
      <div className="my-5 flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => updateParams({ search: e.target.value, page: 1 })}
          className="border w-[50%] border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => updateParams({ category: e.target.value, page: 1 })}
          className="border border-gray-300 rounded-lg py-2 px-4"
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products */}
      {currentProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          <ProductItems products={currentProducts} />
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {/* Prev */}
          <button
            onClick={() => updateParams({ page: Math.max(currentPage - 1, 1) })}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => updateParams({ page })}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}
          {/* Next */}
          <button
            onClick={() =>
              updateParams({
                page: Math.min(currentPage + 1, totalPages),
              })
            }
             className={`px-4 py-2 border rounded-lg ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
