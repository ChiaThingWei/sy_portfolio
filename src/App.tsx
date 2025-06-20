import {seiyu,   potrait, hotel, college } from './utils/images';
import { useEffect, useRef, useState } from 'react';
import SocialIcon from './components/ui/SocialIcon';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { moveUpGsap } from './utils/aminateGsap';
import { services } from './utils/images';
import { college2 } from './utils/images';
import icon from './images/syIcon.png'
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { InstagramEmbed } from 'react-social-media-embed';


import bg from './images/sybackground1.jpeg'

export default function App() {

  useEffect(() => {

    moveUpGsap('.yo')
    moveUpGsap('.text1')
    // moveUpGsap('.skills')
    // moveUpGsap('.skillss')
    moveUpGsap('.check')
    moveUpGsap('.service')
    moveUpGsap('.servicee')

  }, []); 

  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((el) => {
      gsap.fromTo(
         el as Element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  

useEffect(() => {
  let lastScrollY = window.scrollY;
  console.log( lastScrollY);
  const handleScroll = () => {
    const navbar = navbarRef.current;

   
    if (!navbar) return;

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%', // when the top of the container hits 80% of the viewport height
        toggleActions: 'play none none none', // play only once
      },
    });

    tl.fromTo(
      skillRefs.current.filter(Boolean),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        stagger: 0.5,
        ease: 'power3.out',
      }
    );
  }, []);

  // const services = [
  //   {img: grad ,title:'Graduation Potrait', desc:'Celebrate your milestone with timeless, confident shots in your gown — on campus or outdoors.'},
  //   {img: pro ,title:'Professional Potrait',desc:'Stand out with clean, polished headshots ideal for LinkedIn, resumes, or business use.'},
  //   {img: beach,title:'Outdoor Potrait',desc:'Natural light, scenic backdrops, and candid moments — perfect for solo, couple, or lifestyle shoots.'},
  //   {img: fam,title:'Family Potrait',desc:'Warm, genuine photos that capture your family’s love and connection in a relaxed setting.'},
  // ]


const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
const containerRef = useRef<HTMLDivElement | null>(null);
const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <>

        <div className='flex flex-col w-screen scroll-smooth justify-center  relative bg-gray-100'>

          <div ref={navbarRef} className="transition-transform duration-300 fixed  z-20 w-full bg-white opacity-70 top-0 pt-4 pb-2 shadow-md">
                  <div className="w-full flex flex-row justify-evenly pb-4">
                    <a href="#about" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">About Me</a>
                    <a href="#portfolio"  className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Portfolio</a>
                    <a href="#services" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Services</a>
                    <a href="#contact" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Contacts</a>
                    </div>
              </div>

              <section id='about' className='min-h-screen scroll-mt-5'>
               <div className='relative w-screen h-[600px] md:h-[550px] overflow-hidden'>
             
                {/* <Navbar/> */}
                

                  <img
                  src={bg}
                  alt='bg image'
                  className='w-full object-cover h-full opacity-60'
                  />

       
                  <div  className='absolute z-10 inset-0 w-full md:justify-center gap-2 mx-auto mb-5 mt-20 md:mt-10 md:flex md:items-center '>
                    <div id="yo" className=' yo mt-4 opacity-100 md:w-2/5 '>
                      <img
                      src={seiyu}
                      alt="seiyu"
                      className='hover:scale-105 mx-auto transition-transform duration-300 object-cover shrink-0 w-[220px] h-[220px] rounded-full md:w-[250px] md:h-[250px] '
                      />
                    </div>

                    <div className='mt-10 md:mt-0 md:w-2/5'>
                    <p className='font-mono text-center md:text-start  text-black opacity-70 md:opacity-80 font-semibold'>
                      <span className='text-3xl md:text-4xl font-semibold'>HI ! I'M CHIA SEI YU</span>
                      <span className='font-semibold text-xl md:text-3xl'>
                      <br/>
                      I CAN CATCH BEST MOMENTS OF LIFE <br/>
                      </span>
                      <span className='text-sm text-start'>
                      <br/>
                      Whether it’s a quiet portrait, a lively event, or a detailed product shoot,
                      I aim to tell stories through my lens. With a background in both natural light and studio setups, I bring creativity, precision, and a chill vibe to every shoot.
                      </span>
                      </p>


                  
                    </div>
                  </div>
                  
             </div>
             </section>
             

            <section id='portfolio' className='min-h-screen scroll-mt-5'>
            <div  className='full  md:flex items-center justify-center overflow-hidden mx-auto my-10'>

              <div className='mx-auto flex flex-row justify-center md:w-2/5'>
                <div className=''>
                    <img
                    src={college[0].images}
                    alt='hi'
                    className='object-cover w-[180px] h-[400px] md:w-[250px] md:h-[540px]'
                    />
                </div>

                <div className='ml-2 flex flex-col gap-2'>
                  <img
                    src={college[1].images}
                    alt='hi'
                    className='object-cover w-[180px] h-[196px] md:w-[250px] md:h-[266px]'
                    />
                    <img
                    src={college[2].images}
                    alt='hi'
                    className='object-cover w-[180px] h-[196px]  md:w-[250px] md:h-[266px]'
                    />

                </div>
              </div>


              <div className='mt-6 py-auto md:w-2/5 mx-auto justify-center my-auto '>

                <p className='p-6 md:p-0  md:pt-32 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
                My Photography Approach                 
                </p>
                <p className='p-6 md:p-0 md:pt-6 text-black font-mono text-center md:text-start'>
                I believe that the best photographs come from real, unfiltered moments. My style is a blend of natural light, candid emotions, and thoughtful composition — 
                <span className='text-green-500 text-lg font-semibold'> aiming to capture not just how things look, but how they feel. </span>
                 Whether it's a quiet glance, a shared laugh, or a fleeting moment of stillness, I strive to tell honest stories through my lens with warmth and intention.
                </p>

              </div>

            </div>
            


            <div className='left-0 w-3/5 h-[100px] bg-green-500'></div>

            <div className='w-10/12 md:h-[600px] md:flex flex-col items-center justify-center overflow-hidden mx-auto my-10'>

               <div className='w-full md:flex flex-row md:h-1/2 mb-4 overflow-hidden'>

                <div className='flex flex-col md:w-1/2 '>
                  <p className='md:p-4 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
                  Every Frame Has a Story               
                    </p>
                    <p className=' text-black p-4 font-mono text-center md:text-start'>
                    Some memories aren’t loud.  
                  They linger in quiet smiles, the way light falls through a window, or the way two hands find each other in a crowd.  
                    </p>
                </div>
                

                    <img
                    src={college2[0].images}
                    alt={college2[0].name}
                    className='md:w-1/2 w-full h-[250px] md:h-full object-cover md:ml-4 '
                    />

               </div>

               <div className='md:h-1/2 w-full md:flex flex-row overflow-hidden'>
               <img
                    src={college2[1].images}
                    alt='hi'
                    className='md:w-1/2 w-full h-[250px] md:h-full object-cover '
                    />
                      <img
                    src={college2[2].images}
                    alt='hi'
                    className='w-1/4 object-cover md:ml-2 hidden md:block'
                    />

               </div>
            </div>

             
             

              <div className='ml-auto w-3/5 h-[100px] bg-blue-300 mb-10'></div>

              <div className='md:flex flex-row w-full justify-between my-10'>

                <div className='md:w-1/4'>
                  <p className='text-black font-serif  text-2xl p-6 md:mt-20 lg:ml-40'>Love isn’t just seen</p>
                </div>

                <div className='md:w-1/3 mx-auto' style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/DJrsxiJyEUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
              </div>

                <div className='md:w-1/3'>
                      <p className='text-black font-serif ml-6 md:ml-0 md:mt-60 text-2xl mr-20'>it’s felt, captured in the quiet glances and fleeting touches."</p>
                    </div>
              </div>

              </section>
             
            <section id='services' className='min-h-screen scroll-mt-20'>
              <div  className='w-11/12 mx-auto mb-4 '>
                <p className='text-sky-600 text-center font-mono text-3xl'>My Services</p>

                <div className='grid grid-cols-2 mt-8 gap-4 md:grid-cols-4 '>
                {services.map((ser,index)=>(

                  <div key={index} className='mx-auto bg-white shadow-lg border-2 hover:scale-105 transition-transform duration-300 rounded-lg'>
                  
                    <div className=' my-4 mx-auto flex flex-col justify-between h-[450px] '>
                      <img
                      src={ser.img}
                      className='w-[200px] md:w-[250px] h-[300px] rounded-xl object-cover mx-auto p-2'
                      />
                      {/* <p className=' text-black text-center font-semibold font-mono'>{ser.title}</p>
                      <p className='p-2 text-black text-center text-sm'>{ser.desc}</p>
                      <p className='text-center text-black p-2 font-bold mb-0'>{ser.price}</p> */}
                       <div className="flex flex-col flex-1 gap-5 justify-between">
                        <div className='flex-1'>
                          <p className="text-black text-center font-semibold font-mono">{ser.title}</p>
                          <p className="text-black text-center text-sm px-2">{ser.desc}</p>
                        </div>
       
                        <p className="text-center text-black font-bold ">{ser.price}</p>
                    
                      
                      </div>
                    </div>
                   
                    </div>


                ))}
                </div>

              </div>
              </section>
          
            
            {/* <section id='contact' className='min-h-screen'>

                <div className='w-5/6 md:flex mx-auto border-2 border-gray-300 shadow-lg rounded-lg'>

                <div className='mx-auto w-full '>
                  <img
                  src={icon}
                  alt=''
                  className='w-[200px] h-[200px] object-cover mx-auto'
                  />
                  <p className='text-black font-mono text-center'>GET IN TOUCH!</p>
                </div>

                <div className=''>
                  <p className='text-black'>contact</p>
                  <MdOutlineEmail className='text-gray-600 size-7'/>
                  <MdOutlinePhone className='text-gray-600'/>
                  </div>



                </div>
                </section> */}
              
       
          
            
        </div>
      
     
  
    </>
  )
}

