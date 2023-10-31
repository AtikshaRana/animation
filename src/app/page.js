import Intro from './component/Intro';
import Description from './component/description';
import Projects from './component/Projects';
import Dummy from './component/dummy';
import Newone from './component/Newone';
import Ball from './component/ball';
import Slides from './component/slides';
import Openclose from './component/openClose';
import Link from 'next/link';
export default function Home() {
  return (
      <div>
        <Intro />
        <Description />
        <Projects />
        <Dummy/>
        <Newone/>
        <Ball />
        <Slides/>
        <h1 className='text-3xl font-bold underline text-red-500'>End!</h1>
        <Ball/>
        <Openclose/>
        <Link href="/explore" className="explore-btn">
          EXPLORE
          </Link>
      </div>
  )
}
