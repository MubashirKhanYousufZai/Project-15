import React from 'react'
import Image from 'next/image'
const Burgers = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="text-3xl font-serif font-extrabold title-font mb-2 text-gray-900">
          Classic Burgers
        </h1>
        <div className="h-1 w-20 bg-red-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Welcome to Pizza Run! We serve delicious pizzas, sizzling fast food, 
         and irresistible sides, all made with fresh ingredients and a dash of love. 
         Order now or visit us for a flavorful experience you wont forget!
      </p>
    </div>
    <div className="flex justify-center items-center flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/ZB.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Zinger Burger
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/ZS.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Zinger Cheese
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/ChickenB.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Chicken Burger
          </h2>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/beefcheese.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Beef Cheese
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/pizzaburger.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Pizza Burger
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="text-3xl font-serif font-extrabold title-font mb-2 text-gray-900">
          Extreme Burgers
        </h1>
        <div className="h-1 w-20 bg-red-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Welcome to Pizza Run! We serve delicious pizzas, sizzling fast food, 
         and irresistible sides, all made with fresh ingredients and a dash of love. 
         Order now or visit us for a flavorful experience you wont forget!
      </p>
    </div>
    <div className="flex justify-center items-center flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/double.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Double Dacker
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/jalepeno.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Jalepeno Crunch
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/dynamite.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Dynamite
          </h2>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/bigdaddy.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Big Daddy
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/loadedbeef.jpeg"
            alt="Burgers" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Loaded Beef
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Burgers
