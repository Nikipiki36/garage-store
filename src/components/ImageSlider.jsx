import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="relative h-64">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider ${index}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between">
        <button
          onClick={previousImage}
          className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-600"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
