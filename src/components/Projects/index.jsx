import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "ipsum dolor",
        src: "red-flowers.avif"
    },
    {
        title: "amet mollitia",
        src: "road.avif"
    },
    {
        title: "consequatur cum",
        src: "flower.jpeg"
    },
    {
        title: "Ipsa mollitia",
        src: "miniques_lagoon.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: 'bottom top',
        })
    }, [])

    return (
        <section ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Lorem ipsum dolor sit, amet consectetur, quae placeat cumque exercitationem dolore! Accusantium!</p>
                </div>
                <div className={styles.column}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia deserunt consequatur nam cum, cupiditate in voluptas quisquam atque quo rem illum quibusdam expedita a debitis tempore culpa, nobis nisi.</p>
                </div>
            </div>
            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
