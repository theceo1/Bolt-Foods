import React from 'react'
import {categories} from '../data/Data.js'

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1640px] min-auto px-4 py-12'>
        <h1 className='font-bold text-4xl text-center text-orange-600'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'> 
            {categories.map((item, index) => (
                <div key={index} className='justify-between items-center rounded-lg flex p-4 bg-gray-100'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name} className='w-20'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category