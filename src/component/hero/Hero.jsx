import React from 'react'
import { NavLink } from "react-router-dom"
import { FaArrowAltCircleRight } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='flex flex-col gap-7  items-center justify-center h-screen'>
            <div className=''>
                <h1 className=' lg:text-3xl mb-3'>Your Career, Your Story—<span className='text-orange-400'>Write It Here</span>.</h1>
                <p className=''>  Let us help you take the next step toward your dream job with confidence and style.
                </p>
            </div>
            <div className=''>
                <NavLink to={'/built'}>
                    <button type="button" class="text-white bg-gradient-to-br flex items-center justify-center gap-3 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Explore <FaArrowAltCircleRight /></button>
                </NavLink>
            </div>
        </div>
    )
}

export default Hero