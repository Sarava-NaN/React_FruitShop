import React from 'react'

function Divider({title}) {
  return (
           <div className='relative'>
            <div className='border border-1 border-gray-500 w-9/12 mx-auto '>
                <div className='absolute inset-0 flex items-center'>
                <div className='flex justify-center mx-auto'>
            <div className=' font-display text-4xl text-slate-500 bg-white px-4'>
            {title}
        </div>
            </div>
                </div>
            </div>
        </div>
  )
}

export default Divider