import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform">
      <img src={product.image} alt={product.name} className="rounded-xl h-40 w-full object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-[#FFAD00] font-bold mt-2">₹{product.price}</p>
        {product.weight && <p className="text-gray-500 text-sm">Weight: {product.weight}</p>}
      <button className="mt-3 w-full bg-[#FFAD00] text-white py-2 rounded-xl hover:bg-[#CC5500] transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
