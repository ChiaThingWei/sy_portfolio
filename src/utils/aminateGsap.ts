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

export const gsapGroup1 =(divTarget: string, target:string ,  animationProps={},scrollProps={}) =>{

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: divTarget,
            start: "top 30%",
            once: true,
          
            ...scrollProps,
        }
    })

    tl.fromTo(target,{
            opacity: 0,
            scale: 1,
            x: 200},
        {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 3,
            ease: 'power4',
            ...animationProps,  
        },
    0)

        // .fromTo(target2,{
        //     opacity: 0,
        //     scale: 1,
        //     x: 200},
        // {
        //     opacity: 1,
        //     scale: 1,
        //     x: 0,
        //     duration: 3,
        //     ease: 'power4',
        //     ...animationProps,  
        // },0)

      

}
// export const gsapGroup1 =(divTarget: string, target:string , target2: string, target3: string, animationProps={},scrollProps={}) =>{

//     const tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: divTarget,
//             start: "top 50%",
//             once: true,
//             ...scrollProps,
//         }
//     })

//     tl.fromTo(target,{
//             opacity: 0,
//             scale: 1,
//             y: -200},
//         {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 3,
//             ease: 'power4',
//             ...animationProps,  
//         },
//     1)

//         .fromTo(target2,{
//             opacity: 0,
//             scale: 1,
//             y: -200},
//         {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 3,
//             ease: 'power4',
//             ...animationProps,  
//         },0)

//         .fromTo(target3,{
//             opacity: 0,
//             scale: 1,
//             y: -200},
//         {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 3,
//             ease: 'power4',
//             ...animationProps,  
//         },2)

// }

export const gsapGroup2 =(divTarget: string, target:string , target2: string, target3: string, animationProps={},scrollProps={}) =>{

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: divTarget,
            start: "top 30%",
            once: true,
           
            ...scrollProps,
        }
    })

    tl.fromTo(target,{
            opacity: 0,
            scale: 1,
            y: 200},
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 3,
            ease: 'power4',
            ...animationProps,  
        },
    0)

        .fromTo(target2,{
            opacity: 0,
            scale: 1,
            x: -200},
        {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 3,
            ease: 'power4',
            ...animationProps,  
        },0)

        .fromTo(target3,{
            opacity: 0,
            scale: 1,
            x: 200},
        {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 3,
            ease: 'power4',
            ...animationProps,  
        },0)

}