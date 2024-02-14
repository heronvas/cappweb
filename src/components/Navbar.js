import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import myImage from './images/img1.png';

export default function Navbar() {
  return (
    <>
   
    <div className='headsss sticky bg-gray-50 top-0 left-0 right-0 z-10 h-[56px] shadow-sm  grid content-center ' >
       <div className=' flex justify-around'>
            <div className='   '> <img className='w-[150px] h-[30px]' src={myImage} alt="Logo" /> </div> 
           <button className='p-1 rounded hover:bg-gray-300'> <div className=' text-[20px]  font-extralight '>New cars</div> </button>
           <button className='p-1 rounded hover:bg-gray-300'> <div className='  text-[20px]'>Used cars</div></button>
           <button className='p-1 rounded hover:bg-gray-300'><div className='  text-[20px]'>Reviews and News</div></button> 
            <div className='flex border-solid rounded-sm border-1 border-slate-500 bg-inherit '>
                < input type='text' className="text-sm mt-[4px] mb-[5px]  ml-3 outline-[none] bg-inherit" placeholder='Search'></input>
                <CiSearch className='text-[30px]' />
            </div>
            <CiLogin className='text-[35px]' />
        </div> 
       
    </div>
    
    </>
  )
}
