import React, { useState } from 'react'
import {data} from '../data/Data.js';

const Food = () => {
    console.log(data);

    const [food, setFood] = useState(data);

    const filterType =(category) => {
        setFood(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };


    const filterPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
       <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
       <div className='flex flex-col lg:flex-row justify-between '>
           <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFood(data)} className='m-1 border-2 py-2 px-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType("burger")} className='m-1 border-2 py-2 px-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType("pizza")} className='m-1 border-2 py-2 px-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType("salad")} className='m-1 border-2 py-2 px-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType("chicken")} className='m-1 border-2 py-2 px-2 border-orange-500 text-orange-600 hover:bg-orange-600 hover:text-white'>Chickens</button>
                </div>
            </div>
	    </div>
        <div>
            <p className='font-bold text-gray-700'>Filter Prices</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => filterPrice("$")} className='m-1 border-2 py-2 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₦1,000 - ₦1,500</button>
                <button onClick={() => filterPrice("$$")} className='m-1 border-2 py-2 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₦1,500 - ₦2,500</button>
                <button onClick={() => filterPrice("$$$")} className='m-1 border-2 py-2 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₦2,500 - ₦3,500</button>
                <button onClick={() => filterPrice("$$$$")} className='m-1 border-2 py-2 px-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₦3,500 - ₦5,000</button>
            </div>
        </div>


        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {food.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between py-4 px-2'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food