import {seiyu,   potrait, hotel, college } from './utils/images';
import { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { moveUpGsap } from './utils/aminateGsap';
import { services } from './utils/images';
import { college2 } from './utils/images';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { InstagramEmbed } from 'react-social-media-embed';
import { SiXiaohongshu } from "react-icons/si";


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
                    {/* <a href="#about" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">About Me</a>
                    <a href="#portfolio"  className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Portfolio</a>
                    <a href="#services" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Services</a>
                    <a href="#contact" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Contacts</a> */}
                      <a href="#about" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                      关于我</a>
                    <a href="#portfolio"  className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                    我的作品</a>
                    <a href="#services" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                    摄影项目</a>
                    <a href="#contact" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                    联系我</a>
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
                      <span className='text-3xl md:text-4xl font-semibold'>你好 ! 我是 CHIA SEI YU</span>
                      <span className='font-semibold text-xl md:text-3xl'>
                      <br/>
                      {/* I CAN CATCH BEST MOMENTS OF LIFE <br/> */}
                      我不是按下快门，而是按下记忆的暂停键<br/>
                      </span>
                      <span className='text-sm text-start p-6'>
                      <br/>
                      {/* Whether it’s a quiet portrait, a lively event, or a detailed product shoot,
                      I aim to tell stories through my lens. With a background in both natural light and studio setups, I bring creativity, precision, and a chill vibe to every shoot. */}
                      我喜欢捕捉自然的表情、真实的氛围，不做作、不刻意。照片可以是热闹的现场，也可以是一束光、一双眼神。用镜头讲故事，用画面留住那些让人心动的瞬间，就是我的拍摄哲学。
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


              {/* <div className='mt-6 py-auto md:w-2/5 mx-auto justify-center my-auto '>

                <p className='p-6 md:p-0  md:pt-32 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
                My Photography Approach                 
                </p>
                <p className='p-6 md:p-0 md:pt-6 text-black font-mono text-center md:text-start'>
                I believe that the best photographs come from real, unfiltered moments. My style is a blend of natural light, candid emotions, and thoughtful composition — 
                <span className='text-green-500 text-lg font-semibold'> aiming to capture not just how things look, but how they feel. </span>
                 Whether it's a quiet glance, a shared laugh, or a fleeting moment of stillness, I strive to tell honest stories through my lens with warmth and intention.
                </p>

              </div> */}
               <div className='mt-6 py-auto md:w-2/5 mx-auto justify-center my-auto '>

                <p className='p-6 md:p-0  md:pt-32 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
                我的摄影美学
                
                </p>
                <p className='p-6 md:p-0 md:pt-6 text-black font-mono text-center md:text-start'>
                我始终相信，真正动人的画面，源自那些未经雕饰的瞬间。用自然的光影作笔、以情感为墨，
                <span className='text-green-500 text-lg font-semibold'> 我试图捕捉的不仅是形象，更是情绪与温度。</span>
                轻轻的一瞥、悄然的一笑，或是流转之间的沉静时光，皆是我镜头下的诗篇。

摄影于我，不只是记录，而是用光与影，书写生活的低语与温柔。
                </p>

                </div>

            </div>
            


            <div className='left-0 w-3/5 h-[100px] bg-green-500'></div>

            <div className='w-10/12 md:h-[600px] md:flex flex-col items-center justify-center overflow-hidden mx-auto my-10'>

               <div className='w-full md:flex flex-row md:h-1/2 mb-4 overflow-hidden'>

                {/* <div className='flex flex-col md:w-1/2 '>
                  <p className='md:p-4 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
                  Every Frame Has a Story               
                    </p>
                    <p className=' text-black p-4 font-mono text-center md:text-start'>
                    Some memories aren’t loud.  
                  They linger in quiet smiles, the way light falls through a window, or the way two hands find each other in a crowd.  
                    </p>
                </div> */}

              <div className='flex flex-col md:w-1/2 '>
                  <p className='md:p-4 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
                  我从2020年开始拿起相机            
                    </p>
                    <p className=' text-black p-4 font-mono text-center md:text-start'>
                    起初只是想为生活留下些片段，没想到从此一头栽进了光影的世界。那些看似平凡的日常，在镜头下仿佛有了新的呼吸。
                    我喜欢拍风景，也热爱捕捉人间烟火气——天光云影、街头巷尾、熟悉的笑脸和陌生的背影。摄影于我，是一次次注视生活的练习，是在快门间感受世界的方式。
                    我不追求刻意的摆拍，更偏爱自然流露的情感与氛围。愿我的照片里，有风、有光、有故事，也有你共鸣的片刻温柔。
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
                  {/* <p className='text-black font-serif  text-2xl p-6 md:mt-20 lg:ml-40'>Love isn’t just seen</p> */}

                  <p className='text-black font-serif  text-2xl p-6 md:mt-20 lg:ml-40'>为你记录<br/>
                    <span className='font-semibold text-3xl'>专属的光景</span></p>              
                    
                      </div>

                <div className='md:w-1/3 mx-auto' style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/DJrsxiJyEUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
              </div>

                <div className='md:w-1/3'>
                      {/* <p className='text-black font-serif ml-6 md:ml-0 md:mt-60 text-2xl mr-20'>it’s felt, captured in the quiet glances and fleeting touches."</p> */}
                      <p className='text-black font-serif  ml-6 md:ml-0 md:mt-60 text-xl mr-20'>
                      我喜欢用镜头记录属于每个人的独特时刻，无论是海边的风、街角的光，还是生活里不经意的温柔。
                      也常在社交媒体上分享这些片段，希望和你一起，把美好留住。
                      </p>
                    </div>
              </div>

              </section>
             
            <section id='services' className='min-h-screen scroll-mt-10'>
              <div  className='w-11/12 mx-auto mb-4 '>
                <p className='text-sky-600 text-center font-mono text-3xl'>
                摄影项目
                  </p>
                  <p className='text-black text-center text-lg my-4'>
                  风景、情绪、人与人之间的温度，我都愿意为你拍下
                  </p>

                {/* <div className='grid grid-cols-2 mt-8 gap-4 md:grid-cols-4 '> */}
                <div className='flex scrollbar-hide p-4 overflow-x-auto gap-4 md:grid md:grid-cols-4'>
                {services.map((ser,index)=>(

                  // <div key={index} className='mx-auto bg-white shadow-lg border-2 hover:scale-105 transition-transform duration-300 rounded-lg'>
                  <div
                  key={index}
                  className='flex-shrink-0 w-[75%] min-w-[250px] max-w-[300px] mx-auto bg-white shadow-lg border-2 hover:scale-105 transition-transform duration-300 rounded-lg'
                >
                    <div className=' my-4 mx-auto flex flex-col justify-between h-[400px] '>
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
          
            
            <section id='contact' className='min-h-screen md:scroll-mt-20 scroll-mt-10'>

                <div className='w-5/6 md:w-3/5 md:flex mx-auto shadow-xl border-2 border-gray-300  rounded-lg'>

                
                <div className='p-6 w-full md:w-1/2 flex-col flex items-center justify-center'>
                  <p className='text-green-500 text-3xl font-bold text-center '>联系我</p>
                  <p className='text-black mt-4 text-center'>如果你喜欢我的拍摄风格，也正在寻找一位摄影师，欢迎和我聊聊，说不定我们可以一起完成一场很美的拍摄😆</p>
                </div>
                
                <div className='flex md:w-1/2 flex-col w-full gap-3 md:items-start my-7 '>
                  <a href='mailto:sychia306@gmail.com' className='text-black w-2/3 bg-green-400 cursor-pointer hover:border-blue-400 transition-colors duration-300 hover:text-black rounded-full px-4 py-2 mx-auto border-2 flex flex-row'>
                    <MdOutlineEmail className='my-auto size-5'/>
                    <p className='ml-3 '>sychia306@gmail.com</p>
                  </a>


                  <a href='tel: +60166981240' className='text-black  bg-yellow-100 cursor-pointer hover:border-blue-400 transition-colors duration-300 hover:text-black w-2/3 rounded-full px-4 py-2 mx-auto border-2 flex flex-row'>
                <MdOutlinePhone className='my-auto size-5'/>
                <p className='ml-3 '>016-698 1240</p>
               </a>

              
              <a href='https://wa.me/60166981240'  target="_blank" className='text-black bg-green-400 cursor-pointer hover:border-blue-400 transition-colors duration-300 hover:text-black rounded-full px-4 py-2 w-2/3 mx-auto border-2 flex flex-row'>
                <FaWhatsapp className='my-auto size-5'/>
                <p className='ml-3 '>Whatsapp Me</p>
              </a>

              <a href='https://www.instagram.com/y_memoriesworld/'  target="_blank" className='text-black bg-red-300 cursor-pointer hover:border-blue-400 transition-colors duration-300 hover:text-black rounded-full px-4 py-2 mx-auto w-2/3  border-2 flex flex-row'>
                <FaInstagram className='my-auto size-5'/>
                <p className='ml-3'>y_memoriesworld</p>
              </a>

              <a href='https://www.facebook.com/seiyu.chia'  target="_blank" className='text-black bg-blue-300 w-2/3 cursor-pointer hover:border-blue-400 transition-colors duration-300 hover:text-black rounded-full px-4 py-2 mx-auto border-2 flex flex-row'>
                <FaFacebook  className='my-auto size-5'/>
                <p className='ml-3'>Sei Yu Chia</p>
              </a>

              <a href=''  target="_blank" className='text-black bg-red-400 w-2/3 cursor-pointer hover:border-blue-400 transition-colors duration-300 hover:text-black rounded-full px-4 py-2 mx-auto border-2 flex flex-row'>
                <SiXiaohongshu  className='my-auto size-5'/>
                <p className='ml-3'>Sei Yu Chia</p>
              </a>

               </div>



                </div>
                </section>
              
       
          
            
        </div>
      
     
  
    </>
  )
}

