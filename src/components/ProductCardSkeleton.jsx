function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-5 bg-gray-200 rounded w-2/3"></div>

        <div className="flex gap-1">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
        </div>

        <div className="h-6 bg-gray-200 rounded w-1/4"></div>

        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;