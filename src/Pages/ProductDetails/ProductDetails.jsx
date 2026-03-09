import React, { useEffect, useState } from 'react'
import { getProductById } from '../../features/Products/Services/productAPI';
import { useParams ,Link} from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import HalfStar from '../Products/HaIfStar';
import useCart from '../../hooks/useCart';
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
useEffect(() => {
    const fetchProductDetails = async () => {
      let productData = await getProductById(id);
      setProduct(productData);
    };
    fetchProductDetails();
}, [id]);
 if (!product) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }
  return <>
    <Helmet>
        <title>Products Details| ShopHub</title>
      </Helmet>
  <section className="max-w-7xl my-15 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h4 className='my-5'><span className='text-gray-400'>Home / Products /</span>{product?.title}</h4>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-5">

          {/* Category */}
          <p className="text-blue-600 text-sm font-medium">
            {product?.category}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">
            {product?.title}
          </h1>

          {/* Rating */}
           <div className="flex items-center gap-1 text-yellow-500 mt-1">
              {product?.rating >= 4.5 ? (
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
                ({product?.rating?.toFixed(1)})
              </span>
            </div>

          {/* Price */}
          <p className="text-3xl font-bold text-gray-800">
            ${product?.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product?.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">

            {/* Add To Cart */}
             <Link to="/cart" onClick={() => {
               addToCart(product);
               toast.success("Added to cart 🛒");
             }} className="flex items-center gap-2
             bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              <ShoppingCart size={20} />
              Add to Cart
             </Link>
             
          

            {/* Wishlist */}
            <button className="border p-3 rounded-lg hover:text-red-500 hover:border-red-400 transition">
              <Heart size={22} />
            </button>

          </div>

        </div>
      </div>

    </section>
  
  
  
  </>
}

export default ProductDetails