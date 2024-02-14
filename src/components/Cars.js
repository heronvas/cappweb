import React from 'react';
import myImage from './images/car1.png';
import myImage2 from './images/balenoAmt.png';
import myImage3 from './images/ertiga.png';

import { Link } from 'react-router-dom';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomCarosol.css';


export default function Cars() {
  const data = [
    {
      name: "Hyundai Creta",
      img: myImage,
      price: "Rs 11.00 Lakh",
      links: "",
    },
    {
      name: "Maruti Baleno Alpha AGS",
      img: myImage2,
      price: "Rs 9.88 Lakh",
      links: "/baleno2",
    },
    {
      name: "Maruti Baleno Delta AGS",
      img: myImage2,
      price: "Rs 8.00 Lakh",
      links: "/baleno",
    },
    {
      name: "Maruti Ertiga",
      img: myImage3,
      price: "Rs 11.88 Lakh",
      links: "/ertiga",
    },
    // Add more car data if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='cons1 flex-col justify-center content-center'>
        <div className='text-3xl mt-3 flex justify-center content-center'><div className='text-gray-600'>Featured cars</div></div>
        <div className='cars mx-auto h-[400px] w-[950px] overflow-x-none overflow-y-none w'>
          <Slider {...settings}>
            {data.map((d, index) => (
              <Link to={d.links} key={index}>
                <div className='l1 mr-[1000px] border-1 border-slate-300 rounded h-[400px] w-[300px]'>
                  <div className='mt-1 h-[200px]'>
                    <img className='' src={d.img} alt="Logo" />
                  </div>
                  <div className='ml-3 text-xl text-gray-600'>{d.name}</div>
                  <div className='ml-3 mt-1 text-2xl text-gray-900'>{d.price}<p1 className='ml-3 text-xs text-gray-400'>onwards</p1></div>
                  <div className='ml-3 font-light mt-2 text-sm text-gray-600'>Avg Ex-Showroom price</div>
                  <button className='p-2 ml-3 hover:border-blue-400 hover:text-blue-400 text-red-600 mt-3 text-sm rounded border-2 border-red-400'>Show price in my city</button>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
     
    </>
  );
}
