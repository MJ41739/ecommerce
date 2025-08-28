import React, { useState, useEffect } from "react";

const BannerCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every few seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-128 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-64 md:h-128 object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
