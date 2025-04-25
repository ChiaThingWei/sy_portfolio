import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap =(target, animationProps={},scrollProps={}) =>{

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

export const newGsap = (target, animationProps={},scrollProps={}) =>{

    gsap.from(target,{
        opacity: 0,
        scale: 2,
        x:-200,
        duration: 2,
        ease: 'power2.inOut',
        ...animationProps,
        scrollTrigger:{
            trigger: target,
            start: 'top 70%',
            ...scrollProps,
        }

    })

}

export const animateTitleX =(target, animationProps={},scrollProps={}) =>{

    gsap.from(target,{
        opacity: 0,
        scale: 2,
        x:-200,
        duration: 1,
        ease: 'power2.inOut',
        ...animationProps,
        scrollTrigger:{
            trigger: target,
            start: 'top 10%',
            ...scrollProps,
        }

    })
}
