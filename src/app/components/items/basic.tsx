import React from 'react'
import Image from 'next/image'
const Basic = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="text-3xl font-serif font-extrabold title-font mb-2 text-gray-900">
          Basic Flavors
        </h1>
        <div className="h-1 w-20 bg-red-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Welcome to Pizza Run! We serve delicious pizzas, sizzling fast food, 
         and irresistible sides, all made with fresh ingredients and a dash of love. 
         Order now or visit us for a flavorful experience you wont forget!
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/CT.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Chicken Tikka
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/CF.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Chicken Fajita
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/CMB.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Chicken Malai Boti
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/CM.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Creamy Melt
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/CS.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Chicken Supreme
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/AF.JPEG"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Afghani Feast
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/CP.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Cheese Pepproni
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/SB.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Smoke BBQ
          </h2>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/SF.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Siracha Fire
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/MMC.jpeg"
            alt="Pizza" width={80} height={40}
          />
          <h2 className="text-lg text-red-600 font-medium title-font mb-4">
            Mamma Mia Classic
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Basic
