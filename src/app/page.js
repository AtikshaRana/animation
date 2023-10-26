'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Dummy from '../components/dummy';
import Newone from '../components/Newone';


export default function Home() {

  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description />
        <Projects />
        <Dummy/>
        <Newone/>
        <h1 className='text-3xl font-bold underline text-purple'>End!</h1>
      </main>
  )
}
