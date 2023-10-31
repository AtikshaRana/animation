'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import Style from "./style.module.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Slides = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top-=10%",
              end: "2000 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          {
            /* A return function for killing the animation on component unmount */
          }
          pin.kill();
        };
      }, []);
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <section className="multi-slides relative bg-neutral-900">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
           {cards.map((card, index) => {
            return    <div key={index} className={`group relative  overflow-hidden bg-purple scroll-section m-4`}>
            <div
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                {card.title}
              </p>
            </div>
          </div>
          })}
        </div>
      </div>
    </section>
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};





export default Slides;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];