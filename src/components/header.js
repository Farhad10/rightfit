"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle';
import Button from './Button';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import { useCart } from '../context/cartContext';
// import ToolTip from './ToolTip';
const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeLink, setActiveLink] = useState(0);
   const [showSidebar, setShowSidebar] = useState(false);
   const { cart, removeFromCart } = useCart();
   const handleLinkClick = (linkIndex) => {
     setActiveLink(linkIndex);
   };
   const totalCartItemQuantity = cart.length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
    <nav className="bg-white bg-cover bg-center backdrop-filter backdrop-blur-sm z-50 fixed top-0 w-full bg-opacity-50 dark:bg-opacity-50  border-gray-800 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div >
           <div className="flex  justify-between items-center">
            <Link href="/" className='flex'
            >
                <Image width={40} height={40} src="/images/shoplogo.png" className="mr-3 rounded-lg" alt="PolyPlex Logo" />
                <span className="self-center text-xl font-semibold  whitespace-nowrap dark:text-white uppercase  ">Right Fit</span>
            </Link>
           
          
            <div className="justify-between items-center lg:flex lg:w-auto " id="mobile-menu-2">
            <div className="flex items-center lg:order-2">
          
            <div className='lg:mx-12 mx-6'>
            {/* <ToolTip id="exampleTooltip" text="This is a tooltip"> */} 
            
       <DarkModeToggle />     
{/* </ToolTip> */}
            </div>
          
            <div className="flex flex-col items-center mr-6 justify-center  py-2">
            {showSidebar ? (
          <button
            className="flex z-50 bg-[#c60000] rounded-md  items-center  transition transform hover:scale-125 duration-500 cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

          </button>
        ) : (
          <Tooltip title="Cart" position="top">

              <div onClick={() => setShowSidebar(!showSidebar)} className='cursor-pointer relative transition transform hover:scale-125 duration-500  w-6 h-6'>
              {totalCartItemQuantity > 0 && (
          <span className="cart-badge absolute bg-red-500 text-xs text-white rounded-full px-1.5 ml-4 -mt-2">
          {totalCartItemQuantity}
        </span>
        
        )}
        

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
  <path stroke-Linecap="round" stroke-Linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>          

              </div>
              </Tooltip>
        )}
      
        <div  className={`top-0 right-0 lg:w-[30vw] overflow-y-auto dark:bg-gray-700 bg-gray-100 min-h-screen  p-10  text-white fixed h-full z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}>
           <div className=''>
      <h2 className='-mt-3 mb-6 dark:text-white text-black text-xl'>Cart</h2>
      {cart.length === 0 ? (
        <Image src="/images/empty.png" className='mt-32' width={500} height={500} alt='empty' />
      ) : (
        <ul>
          {cart.map(item => (
            <div key={item.id} className=''>
            <li className="w-full border-b border-b-gray-500 py-6 flex " key={item.id}>
                 <div className='w-1/2'>
                    <Image
                      src={item.image}
                      alt="product image"
                      width={500}
                      height={500}
                      className="h-auto rounded-2xl"
                    />
                    </div>
                    <div className='p-3 mt-4'>
                    <div className=' px-3 py-2'>
                    <h2 className="text-center dark:text-white text-black text-lg mt-2">{item.name}</h2>
                    <div className="text-center dark:text-white text-black text-lg mt-2">Price - {item.price} $</div>
                    </div>
              <div className='flex dark:text-white text-black justify-between  border-t border-t-gray-500 px-3 py-2'>
              <Tooltip title="Remove" position="top">  
              <button onClick={() => removeFromCart(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

              </button>
              </Tooltip>
              <Tooltip title="Check Out" position="top">
              <Link href='/checkout'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

              </Link>
              </Tooltip>
              </div>
              </div>
            </li>
            </div>
          ))}
        </ul>
      )}
    </div>
        </div>
    </div>
      
         
          
            
                {/* <Link href="#" className="text-white bg-[#c60000] text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-[#c60000] text-white focus:outline-none dark:focus:ring-blue-800">Log in</Link> */}
                {/* <Link href="#" className="text-white bg-[#c60000] text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-[#c60000] text-white focus:outline-none dark:focus:ring-blue-800">Get started</Link> */}
                {
    isMenuOpen == true
    ?  <button onClick={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-Linecap="round" stroke-Linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

</button>
    :  <button onClick={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                  
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>
}
             
            </div>
       <ul className="hidden lg:block lg:flex ">
           <li className=' hover:scale-110 transition mx-4 transform duration-500'>
               <Link href="/allproducts" className={` py-2 pr-4 pl-3   border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-[#c60000]  lg:border-0 hover:text-white
                 ${
                    activeLink === 1 ? 'bg-[#c60000] text-white ' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(1)}
                  >All Products</Link>
           </li>
         
           <li className=' hover:scale-110 transition transform duration-500'>
               <Link href="/featuredproducts" className={` py-2 pr-4 pl-3   border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-[#c60000]  lg:border-0 hover:text-white
                ${
                    activeLink === 3 ? 'bg-[#c60000] text-white ' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(3)}
               >Featured Products</Link>
           </li>
        
         
       </ul>
   </div>
   </div>
            {isMenuOpen && (
       <div className="lg:hidden z-50 absolute top-[100%] left-0 duration-500 transition-all bg-white dark:bg-gray-800 justify-between items-center w-full  lg:w-auto lg:order-1" id="mobile-menu-2">
       <ul className=" flex flex-col mt-4 text-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
           <li>
               <Link href="/allproducts" className={`block py-2 pr-4 pl-3 hover:scale-110 transition transform duration-500     border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 dark: lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                 ${
                    activeLink === 1 ? ' text-blue-800' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(1)}
               >All Products</Link>
           </li>
      
           <li>
               <Link href="/featuredproducts" className={`block py-2 pr-4 pl-3 hover:scale-110 transition transform duration-500     border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 dark: lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                ${
                    activeLink === 3 ? ' text-blue-800' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(3)}
               >Featured Products</Link>
           </li>
          
       
      
        
       </ul>
       
   </div>
   
      )}
        </div>
    </nav>
</header>
  )
}

export default Header
