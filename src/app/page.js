import React from 'react'
import Slider from '@/components/slider'
import AllProduct from "./allproducts/page"

const page = () => {
  return (
    <div className=''>
     <div className=' border-b dark:border-b-gray-700 '>
      <Slider />
      </div>
      <div>
        <AllProduct />
      </div>
    </div>
  )
}

export default page