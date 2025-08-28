import React from "react";
import ProductGrid from "../components/ProductGrid";
import BannerCarousel from "../components/BannerCarousel";

const bannerImages = [
  "https://imgs.search.brave.com/Fz2Tm6WV-d7oPi0VWkKkXbf1-8mnuOkHlXsOjgYCnIw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bm90ZWJvb2thbmRw/ZW5ndWluLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NC9vcmFuZ2UtY29s/b3ItcGFsZXR0ZXMt/d2l0aC1oZXgtY29k/ZXMucG5n",
  "https://imgs.search.brave.com/Fz2Tm6WV-d7oPi0VWkKkXbf1-8mnuOkHlXsOjgYCnIw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bm90ZWJvb2thbmRw/ZW5ndWluLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NC9vcmFuZ2UtY29s/b3ItcGFsZXR0ZXMt/d2l0aC1oZXgtY29k/ZXMucG5n",
  "https://imgs.search.brave.com/Fz2Tm6WV-d7oPi0VWkKkXbf1-8mnuOkHlXsOjgYCnIw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bm90ZWJvb2thbmRw/ZW5ndWluLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NC9vcmFuZ2UtY29s/b3ItcGFsZXR0ZXMt/d2l0aC1oZXgtY29k/ZXMucG5n",
];

const Home = () => {
  return (
    <>
      <BannerCarousel images={bannerImages} interval={4000} />
      <ProductGrid />
    </>
  );
};

export default Home;
