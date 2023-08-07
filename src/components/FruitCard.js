import React from 'react'

function FruitCard({fruit}) {
  return (
    <div className='rounded-2xl overflow-hidden  shadow-xl tranform hover:scale-110 transform ease-in-out  duration-200 cursor-pointer relative group'>
    <img src={require(`../asests/${fruit.image}.jpg`)} alt={`${fruit.image}`}
        className='w-full h-52 object-cover'/>
    <div className='flex flex-col items-center'>
        <span className='font-body text-slate-500 block'>{fruit.name}</span>
        <span className='font-body text-slate-500'>₹{fruit.price}</span>
    <span className='text-lime-600 font-semibold block text-center invisible group-hover:visible' >Add to Cart</span>
    </div>
    <span className='absolute top-2 right-2 bg-blue-500 rounded-xl py-1 px-1 text-white'>2% off</span>
</div>
  )
}

export default FruitCard;