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
const FeaturedProducts = () => {
  const [featuredProductIds, setFeaturedProductIds] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

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
           <div >
           <div className="hover:scale-110 transition transform duration-500">
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
         </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;


