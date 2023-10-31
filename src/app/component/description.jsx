'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Styles from '../../styles/description.module.css';

const phrases = ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit. Quaerat", "earum unde ipsam ab aut labore", "The nihil quasi. Labore total area", "itaque nihil quasi. Labore, minima?"]

export default function Index() {
  return (
    <div className={`${Styles.description}`}>
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}
function AnimatedText({children}) {
    const text = useRef(null);
    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])
    return <p className='text-white' ref={text}>{children}</p>
}