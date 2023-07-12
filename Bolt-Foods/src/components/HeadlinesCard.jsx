import React from 'react'

const HeadlinesCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 p-2' >Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 p-2' >Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Dessert Too</p>
                <p className='px-2'>Tasty Treat</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 p-2' >Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default HeadlinesCard