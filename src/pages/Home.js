
import myImage from '../components/images/img2.png';
import myImage2 from '../components/images/webpage2sec.png';
import myImage3 from '../components/images/webpagefooter.png';




import Navbar from '../components/Navbar';
import Cars from '../components/Cars';
export default function Home({visible,close}) {
    
  return (
    <div>
      <>
  
    
  <Navbar />
  <img className='w-full mt-[56px]' src={myImage} alt='hero' />
  <Cars />
  <img className='w-full mt-[56px]' src={myImage2} alt='hero' />

    <img className='w-full mt-[6px]' src={myImage3} alt='hero' />

  </>
    </div>
  )
}
