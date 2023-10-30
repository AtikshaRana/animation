import Intro from './component/Intro';
import Description from './component/description';
import Projects from './component/Projects';
import Dummy from './component/dummy';
import Newone from './component/Newone';

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
      <div>
        <Intro />
        <Description />
        <Projects />
        <Dummy/>
        <Newone/>
        <h1 className='text-3xl font-bold underline text-red-500'>End!</h1>
      </div>
  )
}
