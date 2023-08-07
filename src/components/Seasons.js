import React, { useState } from 'react'
import FruitCard from './FruitCard'
import Divider from './Divider'

function Seasons() {
    const[spcl,setSpcl]=useState(
        [
          {
            id: 1,
            image: '7',
            name: 'PineApples',
            price: 400
          },
          {
            id: 2,
            image: '4',
            name: 'Bannanas',
            price: 200
          },
          {
            id: 3,
            image: '5',
            name: 'Cherrys',
            price: 250
          },
        ]
    )
  return (
    <div className='w-5/6 mx-auto my-10'>
       <Divider title={"Season Special"}/>
        {/* {spcl.map((special)=>(
            <div className='inline-block w-4/12 mt-10 px-6 tranform hover:scale-110 transform ease-in-out  duration-200 cursor-pointer group relative'>
                <img src={require(`../asests/${special.image}.jpg`)} alt={`${special.name}`} className='bg-slate-50 pb-20 shadow-2xl rounded-2xl overflow-hidden object-cover' />
                <span className='absolute bottom-0 ml-28 mb-12 text-slate-500'>{special.name}</span>
                <h2 className='absolute bottom-0 flex justify-center text-center ml-36 mb-8'>₹{special.price}</h2>
            </div>
        ))} */}

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
                {
                spcl.map((fruit)=>{
                return <FruitCard key={fruit.id} fruit={fruit} />       
                })
                }
        </section>
    </div>
  )
}

export default Seasons