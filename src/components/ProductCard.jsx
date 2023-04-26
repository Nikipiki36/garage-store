import React from "react";

const ProductCard = ({ imageSrc, title, price, desc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="text-gray-100 font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-100 text-base">{price} руб.</p>
      </div>
      <div className="px-6">
        <div className="text-sm text-gray-200">{desc}</div>
      </div>
      <div className="px-6 pt-4 pb-4">
        <button className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;