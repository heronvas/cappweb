import React from 'react'
import myImage from './images/balenopg.png';
import myImage3 from './images/webpagefooter.png';
import Navbar from './Navbar';
export default function Baleno2() {
  return (
    <div>
      <Navbar/>
      <img className='w-full mt-[56px]' src={myImage} alt='hero' />
      <img className='w-full mt-[6px]' src={myImage3} alt='hero' />
    </div>
  )
}
