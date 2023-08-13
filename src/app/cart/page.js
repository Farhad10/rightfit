// "// pages/cart.js
// "use client"
// import { useState, useEffect } from 'react';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/carts');
//         const data = await response.json();
//         setCartItems(data[0].products); // Assuming the API structure has an array of products in the first cart
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);
// console.log(cartItems)
//   return (
//     <div>
//       <h1>Cart Page</h1>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             <p>Title: {item.title}</p>
//             <p>Price: ${item.price}</p>
//             {/* Other item details */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client"
import React from 'react';
import { useCart } from '../../context/cartContext';
import Image from 'next/image';
import Link from 'next/link';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className='mt-20'>
      <h1 className='text-center text-xl my-10'>Cart </h1>
      {cartItems.length === 0 ? (
        <div className='flex justify-center p-10'>
          <Image 
          src="/images/empty.png"
          alt="product image"
                      width={500}
                      height={500}
                      className=" rounded-2xl flex justify-center" 
          />
          </div>
      ) : (
        <ul className='grid grid-cols-1  lg:grid-cols-4 gap-12 mx-12'>
          {cartItems.map((item, index) => (
            <li className='hover:scale-105 transition transform duration-500 border rounded-2xl' key={index}>
             <div>
              <Image src={item.image}  
                    alt="product image"
                      width={500}
                      height={500}
                      className="h-80 rounded-2xl" />
                       <p className='text-center'>Price: {item.price}</p>
               <p className='text-center h-20 min-h-full'>{item.title}</p>
             <div className='flex justify-between px-8 border-t  py-2'>
             <Tooltip title="Remove" position="top">
               <button className='transition transform hover:scale-125 duration-500  w-6 h-6' onClick={() => removeFromCart(item)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

             </button>
             </Tooltip>
             <Tooltip title="Check Out" position="top">
             <Link href="/checkout" className=''>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="transition transform hover:scale-125 duration-500  w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

             </Link>
             </Tooltip>
             </div>
               </div>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
