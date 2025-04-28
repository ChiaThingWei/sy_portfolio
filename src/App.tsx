import { BackgroundGradient } from './components/ui/background-gradient';
import {seiyu,   potrait, skills, star, services, hotel } from './utils/images';
import { useEffect, useState } from 'react';
import SocialIcon from './components/ui/SocialIcon';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { moveUpGsap } from './utils/aminateGsap';

export default function App() {

  useEffect(() => {

    moveUpGsap('.yo')
    moveUpGsap('.text1')
    moveUpGsap('.skills')
    moveUpGsap('.skillss')
    moveUpGsap('.check')
    moveUpGsap('.service')
    moveUpGsap('.servicee')

  }, []); // This runs only once after component mounts

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

// Toggle modal visibility
const toggleModal = (index: number) => {
  setCurrentIndex(index); // Set the clicked image's index
  setIsModalOpen(!isModalOpen); // Toggle the modal
};

// Go to the next image
const nextImage = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % potrait.length); 
};

// Go to the previous image
const prevImage = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + potrait.length) % potrait.length); 
};
 
  return (
    <>
    <section className='w-screen h-screen'>
      <menu/>

      <div className='w-screen justify-center'>
        <div className='flex flex-col pt-5 w-full justify-center relative h-full bg-gray-100'>
         <div className=" bg-white/50 h-[1px] transform  w-[90%] mx-auto mb-5" />
             {/* <div className='w-[30%] mx-auto mb-5'>
                <BackgroundGradient className=' '>
                  <p className='text-center uppercase'>About Me</p>
                </BackgroundGradient>
              </div> */}

                <div className='w-4/5 mx-auto my-5 text-center md:flex md:items-center md:justify-center'>
                  <div id="yo" className='yo opacity-100 flex-1'>
                    <img
                    src={seiyu}
                    alt="seiyu"
                    className='rounded hover:scale-105 transition-transform duration-300 object-cover shrink-0 mx-auto w-[350px] md:w-[450px] md:h-[450px] h-[350px]'
                    />
                  </div>
                  <div className='flex-1 mt-10'>

                  <p className='text-xl text-black font-semibold'>
                    <span className='font-semibold'>
                    CHIA SEI YU <br/>
                    </span>
                   
                    25<br/>
                    Professional Photographer
                    </p>

                    
                   <p className='p-5 m-5 text-black'>Hi! I’m Sei Yu — a passionate photographer with a love for capturing real moments and raw emotions.
                     
                    <span id="" className='text1 text-xl font-bold text-blue-600'>
                    {' '} Whether it’s a quiet portrait, a lively event, or a detailed product shoot,
                    I aim to tell stories through my lens.{' '}
                    </span>
                    With a background in both natural light and studio setups, I bring creativity, precision, and a chill vibe to every shoot.
                  </p>
                 

                  </div>
                </div>

                <div className=" bg-black h-[1px] transform  w-[90%] mx-auto my-5" />

                <div className='skills opacity-0 w-[30%] mx-auto my-5'>
                <BackgroundGradient className=' '>
                  <p className='font-semibold text-center uppercase'>Skills</p>
                </BackgroundGradient>
              </div>
              <div className='text-center w-4/5 mx-auto'>
                  <p className='text-black'>
                  擅长 Photoshop、Illustrator、Premiere Pro、CapCut，精通摄影与摄像，用影像表达创意。<br/>
                  Skilled in Photoshop, Illustrator, Premiere Pro, CapCut, photography, and videography — I bring ideas to life through powerful visuals.
                  </p>
              </div>

              {/* <p className='my-5 mx-auto text-black font-dancing font-bold text-3xl'>MY SKILLS</p> */}

              <div className='skillss grid grid-cols-3 gap-10 md:gap-3 my-10 w-[90%] mx-auto'>
                {skills.map((items,index)=>(

                  <div key={index} className='mx-auto'>
                  <img
                  src={items.images}
                  alt={items.name}
                  className='w-[80px] h-[80px] object-cover rounded mx-auto hover:shadow-xl hover:scale-105 transition-transform  duration-300'
                  />

                  <p className='text-center text-black mt-2 text-sm'>{items.name}</p>

                  </div>
                ))}
              </div>

              {/* <div className=" bg-black h-[1px] transform  w-[90%] mx-auto my-5" /> */}

              <div className='w-screen h-[300px] md:h-[500px] my-10 justify-center items-center flex'>

                <div  className='quote w-4/5 md:w-3/5 absolute z-10 bg-slate-200  bg-opacity-50 rounded '>
                 <p className=' p-5 text-center font-whisper text-xl text-white md:text-4xl'>
                  “Photography is the story I fail to put into words.” <br/>
                 – Chia Sei Yu</p>
                </div>
              
                <img
                src={star}
                alt="star"
                className='relative object-cover w-full h-full'
                style={{ filter: 'brightness(50%)' }}
                />
              </div>

              <div className='check w-[50%] md:w-[30%] mx-auto my-5'>
                <BackgroundGradient className=' '>
                  <p className='text-center uppercase'>Check Out My Work !</p>
                </BackgroundGradient>
              </div>

              <div className='text-center w-4/5 mx-auto'>
                  <p className='text-black'>
                  我们参与的一些项目一览。无论是企业肖像还是产品摄影，我们都能为您提供全面服务！<br/>
                    Here’s a quick look at the projects that we have worked on. Whether it is a
                  corporate portrait or product photography, we have it all covered!</p>
              </div>

              <div className='checkk mt-10 grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-auto gap-6 md:gap-20'>
                  {potrait.map((items,index)=>(

                    <div key={index}>
                      <img
                      src={items.images}
                      alt={items.name}
                      className='rounded hover:scale-105 transition-transform duration-300 w-[300px] h-auto'
                      onClick={() => toggleModal(index)}
                      />

{isModalOpen && (
        <div
          className="w-screen fixed inset-0 bg-gray-200 bg-opacity-30 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside image
        >
          <div
            className="w-full md:w-3/5 relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal if the image is clicked
          >
             <div
              className="ml-5 md:ml-32 absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-3xl cursor-pointer"
              onClick={prevImage}
            >
              &#8592; {/* Left arrow */}
            </div>
            <img
              src={potrait[currentIndex].images}
              alt={potrait[currentIndex].name}
              className="w-[300px] md:w-[400px] h-auto mx-auto object-contain shadow-lg rounded-lg"
            />
            {/* Navigation Arrows */}
           
            <div
              className="mr-5 md:mr-32 absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-3xl cursor-pointer"
              onClick={nextImage}
            >
              &#8594; {/* Right arrow */}
            </div>
            
          </div>
        </div>
      )}
                      
                    </div>
                  ))}

              </div>



              <div className=" bg-black h-[1px] transform  w-[90%] mx-auto my-10" />

              <div className='service w-[50%] md:w-[30%] mx-auto mb-5'>
                <BackgroundGradient className=' '>
                  <p className='text-center uppercase'>Services</p>
                </BackgroundGradient>
              </div>

              <div className='text-center w-4/5 mx-auto'>
                  <p className='text-black'>
                  提供专业的毕业照、个人肖像、家庭合影以及户外摄影服务 — 捕捉每一个时刻的风格与情感。<br/>
                  Offering professional graduation portraits, personal and family sessions, and outdoor photography — capturing every moment with style and emotion.</p>
              </div>


            <div className='servicee w-[80%] mt-10 grid grid-cols-1 md:grid-cols-3 justify-center items-stretch mx-auto gap-6 md:gap-20'>
              {services.map((items, index) => (
                <div key={index} className='mx-auto flex flex-col items-center h-full max-w-[300px]'>
                  <img
                    src={items.images}
                    alt={items.title}
                    className='rounded hover:scale-105 transition-transform duration-300 w-full h-auto'
                  />
                  <div className="flex flex-col flex-1 justify-between text-center mt-5">
                    <p className='text-black font-bold text-lg'>{items.title}</p>
                    <p className='text-black mt-2 text-sm min-h-[48px]'>{items.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            

            <div className='flex justify-center items-center w-screen h-[200px] md:h-[300px] mt-10'>
              <div className='absolute z-10 flex flex-col'>
              <p className=' text-center text-3xl md:text-5xl'>
                
                Contact Me <br/>
                <span className='text-lg md:text-xl'>联络方式</span>
                </p>

                <div className="flex flex-row mt-5 md:mt-10 gap-4 justify-evenly items-center">
                  <SocialIcon href="https://wa.me/your-number-here">
                    <FaWhatsapp className='md:size-8 hover:text-blue-500'/>
                  </SocialIcon>
                  <SocialIcon href="https://facebook.com/your-link-here">
                    <FaFacebook className='md:size-8 hover:text-blue-500'/>
                  </SocialIcon>
                  <SocialIcon href="https://www.instagram.com/y_memoriesworld?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <FaInstagram className='md:size-8 hover:text-blue-500'/>
                  </SocialIcon>
              </div>

              <footer className="text-center p-4 text-sm md:text-md text-gray-500">
                &copy; {new Date().getFullYear()} Brian . All rights reserved.
              </footer>
            
              </div>
              <img
                src={hotel}
                className='relative h-full w-full object-cover'
                style={{ filter: 'brightness(30%)' }}
              />
            </div>

        </div>
      </div>
     
    </section>
    </>
  )
}

