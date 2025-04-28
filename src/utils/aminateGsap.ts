import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const visibleGsap =(target:string , animationProps={},scrollProps={}) =>{

    gsap.to(target,{
        opacity:0.8,
        duration: 1.5, 
        ease: "power2.inOut",
        ...animationProps,
        scrollTrigger:{
            trigger: target,
            start: 'top 70%',
            ...scrollProps,
        }

    })
}

export const moveUpGsap =(target:string , animationProps={},scrollProps={}) =>{

    gsap.fromTo(target, 
        {
          opacity: 0,
          scale: 1,
          y: 200
        }, 
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 3,
          ease: 'power4',
          ...animationProps,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%',
            ...scrollProps,
          }
        });
}

export const moveDownGsap =(target:string , animationProps={},scrollProps={}) =>{

    gsap.to(target,{
        opacity:0.8,
        duration: 1.5, 
        ease: "power2.inOut",
        ...animationProps,
        scrollTrigger:{
            trigger: target,
            start: 'top 80%',
            ...scrollProps,
        }

    })
}

