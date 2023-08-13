
import React from 'react';
import Image from 'next/image';
const CheckOut = () => {

  return (
   
  <div className="grid sm:px-10 lg:grid-cols-2 lg:px-6 xl:px-12 lg:mt-20 mt-10 ">
    <div className='lg:block hidden'>
        <Image src="/images/checkout.jpg" width={900} height={1200} alt='money' className='rounded-2xl mt-10 w-full' />
    </div>
    <div className="mt-10 bg-gray-50 px-4 mx-4 lg:ml-8 mb-6 pt-8 lg:mt-0 dark:bg-gray-800 rounded-xl">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">Complete your order by providing your payment details.</p>
      <div className="">
        <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div className="relative">
          <input type="text" id="email" name="email" className="w-full dark:bg-gray-700 rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
        <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div className="relative">
          <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 dark:bg-gray-700 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
        </div>
        <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
        <div className="flex">
          <div className="relative w-7/12 flex-shrink-0">
            <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 dark:bg-gray-700 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
              </svg>
            </div>
          </div>
          <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 dark:bg-gray-700 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
          <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 dark:bg-gray-700 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
        </div>
        
  
     
        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium ">Subtotal</p>
            <p className="font-semibold ">$399.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium ">Shipping</p>
            <p className="font-semibold ">$8.00</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium ">Total</p>
          <p className="text-2xl font-semibold ">$408.00</p>
        </div>
      </div>

      <button className="mt-4 mb-8 w-full hover:scale-110 transition transform duration-500 rounded-md bg-[#c60000] px-6 py-3 font-medium text-white">Place Order</button>
    </div>
  </div>
  
  );
};

export default CheckOut;
