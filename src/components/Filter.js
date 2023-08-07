import React, { useState } from 'react'

function Filter() {
    const [select,setSelect]=useState(1)
  return (
    <div className="max-sm:flex-col flex justify-around my-3 md:my-0">
        <button className={`space-x-12  mt-20 mx-auto filter ${select===1 ? "bg-green-500 text-white border-none":"text-slate-500"}`} onClick={()=>{setSelect(1)}}>Latest</button>
             <button className={`space-x-12  mt-20 mx-auto filter ${select===2 ? "bg-green-500 text-white border-none":"text-slate-500"}`} onClick={()=>{setSelect(2)}}>Best Seller</button>
             <button className={`space-x-12  mt-20 mx-auto filter ${select===3 ? "bg-green-500 text-white border-none":"text-slate-500"}`}onClick={()=>{setSelect(3)}}>Special</button>
    </div>
  )
}

export default Filter