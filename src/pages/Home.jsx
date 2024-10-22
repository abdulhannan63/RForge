import React from 'react'
import Hero from '../component/hero/Hero'
import SimpleCard from '../component/simplecard/SimpleCard'
import Herosec from '../component/hero/Herosec'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
          <div>
            <Hero />
          </div>
          <div>
          {/* this is the lower part of the hero section */}
            <Herosec />
          </div>
        </div>
    )
}

export default Home