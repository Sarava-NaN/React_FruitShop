import React, { useRef,useState } from 'react'

function Navbar() {
    const colorSpan=useRef(null);
    const colorSpan2=useRef(null);
    const colorSpan3=useRef(null);
    const colors=["#F6AE2D","#F26419","#56203D","#FF1D15","#53DD6C","#FDE12D","#32E875","#F8F4E3","#706C61","#E5446D","#623CEA","#020202","#A882DD","#49416D","#86BBD8"]

   const StyleSpan=()=>{
   const RandomColorGenerator=Math.floor(Math.random()*colors.length);
   colorSpan.current.style.color=colors[RandomColorGenerator];
   }
   const StyleSpan2=()=>{
    const RandomColorGenerator=Math.floor(Math.random()*colors.length);
    colorSpan2.current.style.color=colors[RandomColorGenerator];
    }

    const StyleSpan3=()=>{
        const RandomColorGenerator=Math.floor(Math.random()*colors.length);
        colorSpan3.current.style.backgroundColor=colors[RandomColorGenerator];
        }
  
        const[open,setOpen]=useState(false); 
        const burgerClick=()=>{
            console.log(open);
            setOpen(!open);
        }
 
  return (
    <nav className='md:flex justify-between max-w-7xl mx-auto mt-5'>
        <div className='flex justify-between w-5/6 md:max-w-7xl mx-auto'>
        <div>
            <span className='text-green-500 font-black text-5xl cursor-pointer' ref={colorSpan} onClick={StyleSpan}>Fruit</span>
            <span className='text-slate-500 font-semibold text-4xl cursor-pointer mx-4' ref={colorSpan2} onClick={StyleSpan2}>Shop</span>
        </div>
           
          <div className='md:hidden mt-2'>
            <button onClick={burgerClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
            </button>
          </div>
          </div>
        <div className={`flex md:block justify-end ${open ? "block":"hidden"}`}>
            <ul className='text-slate-500 text-lg font-body md:flex md:space-x-8 space-y-8 md:space-y-0'>
                <li className='navbar_hover border-b-4' ref={colorSpan3} onClick={StyleSpan3}>
                    <a href="#">Fruits</a>
                </li>
                <li className='navbar_hover'>
                    <a href="#">Vegitables</a>
                </li>
                <li className='navbar_hover'>
                    <a href="#">More</a>
                </li>
                <li className='px-4 py-2'>
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                       </svg>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar