"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Style from "./style.module.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const data = [
  {
    color: "green",
    title: "Section 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem ipsum eligendi neque qui vero quo maxime eveniet quis mollitia repellendus, explicabo at fugit voluptatum rerum, in modi commodi. Itaque odit aperiam porro repellendus dolorem facilis reprehenderit unde perferendis eum, nulla amet impedit illo, quas autem laborum natus aut earum non vitae ea consequatur voluptas distinctio modi temporibus. Magni, atque. Voluptatum delectus magni expedita quibusdam, sunt velit explicabo, error distinctio placeat impedit et cupiditate ullam? Quasi dicta, obcaecati deleniti quia harum expedita aliquid doloremque excepturi, voluptates inventore deserunt iure, a necessitatibus id dolorum assumenda molestias numquam non in? Accusantium rem incidunt, porro excepturi minima dignissimos voluptas eius exercitationem doloribus aliquam amet doloremque repellat, sed quis libero neque. Aliquam blanditiis inventore maxime nemo in numquam cumque vitae minus officiis, praesentium voluptas pariatur molestiae laboriosam quas libero aperiam provident sequi, omnis maiores placeat cupiditate iure unde animi. Sint eaque nihil sapiente laborum?"
  },
  {
    color: "red",
    title: "Section 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem ipsum eligendi neque qui vero quo maxime eveniet quis mollitia repellendus, explicabo at fugit voluptatum rerum, in modi commodi. Itaque odit aperiam porro repellendus dolorem facilis reprehenderit unde perferendis eum, nulla amet impedit illo, quas autem laborum natus aut earum non vitae ea consequatur voluptas distinctio modi temporibus. Magni, atque. Voluptatum delectus magni expedita quibusdam, sunt velit explicabo, error distinctio placeat impedit et cupiditate ullam? Quasi dicta, obcaecati deleniti quia harum expedita aliquid doloremque excepturi, voluptates inventore deserunt iure, a necessitatibus id dolorum assumenda molestias numquam non in? Accusantium rem incidunt, porro excepturi minima dignissimos voluptas eius exercitationem doloribus aliquam amet doloremque repellat, sed quis libero neque. Aliquam blanditiis inventore maxime nemo in numquam cumque vitae minus officiis, praesentium voluptas pariatur molestiae laboriosam quas libero aperiam provident sequi, omnis maiores placeat cupiditate iure unde animi. Sint eaque nihil sapiente laborum?"
  },
  {
    color: "yellow",
    title: "Section 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem ipsum eligendi neque qui vero quo maxime eveniet quis mollitia repellendus, explicabo at fugit voluptatum rerum, in modi commodi. Itaque odit aperiam porro repellendus dolorem facilis reprehenderit unde perferendis eum, nulla amet impedit illo, quas autem laborum natus aut earum non vitae ea consequatur voluptas distinctio modi temporibus. Magni, atque. Voluptatum delectus magni expedita quibusdam, sunt velit explicabo, error distinctio placeat impedit et cupiditate ullam? Quasi dicta, obcaecati deleniti quia harum expedita aliquid doloremque excepturi, voluptates inventore deserunt iure, a necessitatibus id dolorum assumenda molestias numquam non in? Accusantium rem incidunt, porro excepturi minima dignissimos voluptas eius exercitationem doloribus aliquam amet doloremque repellat, sed quis libero neque. Aliquam blanditiis inventore maxime nemo in numquam cumque vitae minus officiis, praesentium voluptas pariatur molestiae laboriosam quas libero aperiam provident sequi, omnis maiores placeat cupiditate iure unde animi. Sint eaque nihil sapiente laborum?"
  },
  {
    color: "pink",
    title: "Section 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatem ipsum eligendi neque qui vero quo maxime eveniet quis mollitia repellendus, explicabo at fugit voluptatum rerum, in modi commodi. Itaque odit aperiam porro repellendus dolorem facilis reprehenderit unde perferendis eum, nulla amet impedit illo, quas autem laborum natus aut earum non vitae ea consequatur voluptas distinctio modi temporibus. Magni, atque. Voluptatum delectus magni expedita quibusdam, sunt velit explicabo, error distinctio placeat impedit et cupiditate ullam? Quasi dicta, obcaecati deleniti quia harum expedita aliquid doloremque excepturi, voluptates inventore deserunt iure, a necessitatibus id dolorum assumenda molestias numquam non in? Accusantium rem incidunt, porro excepturi minima dignissimos voluptas eius exercitationem doloribus aliquam amet doloremque repellat, sed quis libero neque. Aliquam blanditiis inventore maxime nemo in numquam cumque vitae minus officiis, praesentium voluptas pariatur molestiae laboriosam quas libero aperiam provident sequi, omnis maiores placeat cupiditate iure unde animi. Sint eaque nihil sapiente laborum?"
  },
]

function Index() {
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
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {
            data.map((data , index)=> {
             return <div key={index} className={`scroll-section ${data.color}`}>
                <div className="container">
                  <h3 className={Style.projectEl}>{data.title}</h3>
                  <p className="text-white text-center text-xl">{data.description}
                  </p>
                </div>
            </div>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Index;
