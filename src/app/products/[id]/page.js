
"use client"
import React, { useEffect, useState } from 'react';
import { useCart } from '../../../context/cartContext';
import Image from 'next/image';
import ProtectedRoute from "../../ProtectedRoute";
export default function DynamicId({ params: { id } }) {
  const { addToCart,cartItems, notification  } = useCart();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }
  console.log('Cart Items:', cartItems);

  return (
    <ProtectedRoute>
    <div className="lg:m-20 mt-20">
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
    {notification && <div className="notification mt-16">{notification}</div>}
        
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
          <Image src={data.image} alt={data.title} width={500} height={500} className="w-full h-96 rounded-lg" />
        </div>

        <div className="mb-12 lg:p-12 p-4 rounded-lg md:mb-0 md:w-8/12 lg:w-7/12 xl:w-5/12">
          <div className="px-4 py-2 mt-2">
            <h1 className="pb-2 mr-1 text-xl ">
              Title : {data.title}
            </h1>

            <p className="pb-2 mr-1">
              Price : {data.price}
            </p>
            <p className="pb-2 mr-1">
              Category : {data.category}
            </p>
            <p className="pb-2 mr-1">
              Rate : {data.rating.rate}
            </p>
            <p className="pb-2 mr-1">
              Count : {data.rating.count}
            </p>
            <p className="pb-2 mr-1">
              Description : {data.description}
            </p>
          </div>
          <button onClick={() => addToCart(data)} className="relative hover:scale-110 mx-4 my-6 transition transform duration-500 inline-flex items-center justify-center px-4 py-1.5 overflow-hidden cursor-pointer text-white bg-[#c60000] rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
<span className="relative text-lg text-white">Add to Cart</span>
</button>
         
    </div>
    </div>
    </div>
    </ProtectedRoute>
  );
}

