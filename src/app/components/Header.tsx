import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="text-slate-950 bg-yellow-100 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex gap-4 title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={"/profile.jpg"} alt='profile' width={50} height={50} className='rounded-full'/>
      <span className="ml-3 text-2xl hover:text-red-600 font-serif cursor-pointer">Pizza Run</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-red-600 cursor-pointer" href='/components/hero'>Home</a>
      <a className="mr-5 hover:text-red-600 cursor-pointer" href='/components/items'>Menu</a>
      <a className="mr-5 hover:text-red-600 cursor-pointer">Deals</a>
      <a className="mr-5 hover:text-red-600 cursor-pointer">Offers</a>
    </nav>
    <button className="flex gap-2 items-center bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 hover:text-white rounded text-base mt-4 md:mt-0">
      <a href="/components/order">
      Place Order
      </a>
    </button>
  </div>
</div>
  )
}

export default Header
