"use client"
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const YourComponent = () => {
//   const [data, setData] = useState(null);
 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured', {
//           method: 'GET',
//           headers: {
//             'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
//             'Content-Type': 'application/json'
//           }
//         });

//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           console.error('API request failed:', response.statusText);
//         }
//       } catch (error) {
//         console.error('An error occurred:', error);
//       }
//     };

//     fetchData();
//   });
// console.log(data)

//   return (

//         <div className='mt-20'>
//         {data ? (

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-4 mx-12">
            
//             {data.featured.map((product, index) => (
//              <div >
//              <div className="hover:scale-110 transition transform duration-500">
//                <Image
//                  src={product.image}
//                  alt="product image"
//                  width={500}
//                  height={500}
//                  className="h-80 rounded-2xl"
//                />
//                <h2 className="text-center text-lg mt-2">{product.name}</h2>
//                <div className="text-center text-lg mt-2">{product.price} $</div>
//              </div>
//            </div>
//             ))}
//           </div>
//         ) : (
//           <p>Loading products...</p>
//         )}
//         </div>
    
//   );
// };

// export default YourComponent;

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from "../../context/cartContext";
const FeaturedProducts = () => {
  const [featuredProductIds, setFeaturedProductIds] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { addToCart, notification } = useCart();

  useEffect(() => {
    fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured', {
      headers: {
        'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setFeaturedProductIds(data.featured.map(item => item.productId)))
      .catch(error => console.error('Error fetching featured products:', error));

    fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', {
      headers: {
        'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setAllProducts(data.products || [])) // Provide a default empty array if data.products is undefined
      .catch(error => console.error('Error fetching all products:', error));
  }, []);

  const featuredProducts = allProducts.filter(product => featuredProductIds.includes(product.id));

  return (
    <div className='mt-20'>
      <h2 className='text-2xl text-center my-8'>Featured Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-4 mx-12">
        {featuredProducts.map(product => (
           <div className='group cursor-pointer relative' key={product.id}>
           <div onClick={() => addToCart(product)} className="group-hover:scale-110   group-hover:opacity-20 group-hover:dark:bg-black border rounded-2xl transition transform duration-500">
             <Image
               src={product.image}
               alt="product image"
               width={500}
               height={500}
               className="h-80 rounded-2xl"
             />
             <h2 className="text-center text-lg mt-2">{product.name}</h2>
             <div className="text-center text-lg mt-2">{product.price} $</div>
           </div>
           <div className="absolute pointer-events-none group-hover:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hidden ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6  m-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      <p className="text-center">Add To Cart</p>
                    </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;


