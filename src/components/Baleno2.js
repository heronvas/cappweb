import React from 'react'
import myImage from './images/balenonew2.png';
import myImage3 from './images/webpagefooter.png';
import Navbar from './Navbar';
import { RiCustomerService2Fill } from "react-icons/ri";
import Chatbot from '../components/Chatbot';
import  { useState, useEffect } from 'react';
export default function Baleno2() {
  const [show, setShow] = useState(false);
  useEffect(() => {
      // Scroll to the top when the App component mounts
      window.scrollTo(0, 0);
  
      // Set show state to true after 5 seconds
      const timeoutId = setTimeout(() => {
        setShow(true);
      }, 5000);
  
      // Clear the timeout when the component unmounts to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }, []);
  
    const toggleShow = () => {
      setShow(!show);
    };

  return (
    <>
    <div>
      <Navbar/>
      <img className='w-full mt-[65px]' src={myImage} alt='hero' />
      <img className='w-full mt-[6px]' src={myImage3} alt='hero' />
    </div>
     <button
     className={`fixed bttt bottom-10 right-10 z-50 bg-[#002b57] text-white rounded-full p-2 hover:bg-gray-900`}
     onClick={toggleShow}
   > 

<RiCustomerService2Fill className='w-[55px] h-[55px] '/>
     
   </button>

   <Chatbot visible={show} close={toggleShow} />
   </>
  )
}
