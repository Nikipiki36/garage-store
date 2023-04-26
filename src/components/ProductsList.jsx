import { useState, useEffect } from 'react';
import React from "react";
import ProductCard from './ProductCard';

const API_URL = 'https://64485599e7eb3378ca2c9a10.mockapi.io/parts'

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(API_URL)
          .then(response => response.json())
          .then(data => {
            setProducts(data);
            
            const allCategories = [...new Set(data.map(product => product.category))];
            setCategories(allCategories);
          });
      }, []);

      const filterProductsByCategory = category => {
        setSelectedCategory(category);
      };

    return (
        <div className="contrainer-fluid p-5 bg-zinc-800 text-zinc-100">
            <h1 className="text-3xl text-center m-3">Наш Ассортимент</h1>
            <p className='text-md text-center text-gray-400'>Товары самых разных категорий</p>

            <div className='text-center mt-5 p-3'>
                <a className='mx-2' onClick={() => filterProductsByCategory('all')}>
                    Show all
                </a>
                {categories.map(category => (
                    <a className='category-btn mx-2' onClick={() => filterProductsByCategory(category)}>
                    {category}
                    </a>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-3 p-4'>
                {products.map(product => (
                    <div key={product.id} className={`product ${(product.category !== selectedCategory && selectedCategory != 'all') && 'hidden-card'}`}>
                        <ProductCard key={product.id} 
                        title={product.name} 
                        price={product.price}
                        desc={product.description}
                        imageSrc={product.image}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
