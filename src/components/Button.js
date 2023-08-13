import React from 'react'

const Button = ({text}) => {
  return (
  
               <div className="relative hover:scale-110 transition transform duration-500 inline-flex items-center justify-center px-4 py-1.5 overflow-hidden cursor-pointer text-white bg-[#c60000] rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
<span className="relative text-lg text-white">{text}</span>
</div>
   
  )
}

export default Button