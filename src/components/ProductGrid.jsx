import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Organic Honey", description: "Pure natural honey", price: 299, weight:"1 kg", image: "https://imgs.search.brave.com/Fz2Tm6WV-d7oPi0VWkKkXbf1-8mnuOkHlXsOjgYCnIw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bm90ZWJvb2thbmRw/ZW5ndWluLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NC9vcmFuZ2UtY29s/b3ItcGFsZXR0ZXMt/d2l0aC1oZXgtY29k/ZXMucG5n" },
  { id: 2, name: "Dry Fruits Mix", description: "Healthy and crunchy", price: 499,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Green Tea", description: "Refreshing and organic", price: 199,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Organic Honey", description: "Pure natural honey", price: 299,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Dry Fruits Mix", description: "Healthy and crunchy", price: 499,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 6, name: "Green Tea", description: "Refreshing and organic", price: 199,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 7, name: "Organic Honey", description: "Pure natural honey", price: 299,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 8, name: "Dry Fruits Mix", description: "Healthy and crunchy", price: 499,weight:"1 kg", image: "https://via.placeholder.com/300" },
  { id: 9, name: "Green Tea", description: "Refreshing and organic", price: 199,weight:"1 kg", image: "https://via.placeholder.com/300" },
  
];

const ProductGrid = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
